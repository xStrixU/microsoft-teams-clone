import { Inject, Injectable } from '@nestjs/common';
import { Store } from 'express-session';
import { RedisClientType } from 'redis';

import { SESSION_MAX_AGE } from './sessions.constants';

import { REDIS_TOKEN } from '@/database/redis/redis.provider';

import type { SessionData } from 'express-session';

const PREFIX = 'session:';

@Injectable()
export class RedisSessionStore extends Store {
	constructor(@Inject(REDIS_TOKEN) private readonly redis: RedisClientType) {
		super();
	}

	get(
		sessionId: string,
		callback: (err: any, session?: SessionData | null | undefined) => void
	): void {
		this.redis
			.get(`${PREFIX}${sessionId}`)
			.then(serializedSession => {
				const session = serializedSession ? (JSON.parse(serializedSession) as SessionData) : null;

				callback(null, session);
			})
			.catch(callback);
	}

	set(sessionId: string, session: SessionData, callback?: ((err?: any) => void) | undefined): void {
		const serializedSession = JSON.stringify(session);
		const ttl = this.getTTL(session);

		this.redis
			.set(`${PREFIX}${sessionId}`, serializedSession, { PX: ttl })
			.then(callback)
			.catch(callback);
	}

	destroy(sessionId: string, callback?: ((err?: any) => void) | undefined): void {
		this.redis.del(`${PREFIX}${sessionId}`).then(callback).catch(callback);
	}

	async all(
		callback: (err: any, obj?: SessionData[] | { [sid: string]: SessionData } | null) => void
	): Promise<void> {
		const keys = await this.getAllSessionKeys();

		try {
			const serializedSessions = (await this.redis.mGet(keys)) as string[];
			const sessions = serializedSessions.map(
				serializedSession => JSON.parse(serializedSession) as SessionData
			);

			callback(null, sessions);
		} catch (err) {
			callback(err);
		}
	}

	length(callback: (err: any, length: number) => void): void {
		this.getAllSessionKeys()
			.then(keys => callback(null, keys.length))
			.catch(err => callback(err, 0));
	}

	async clear(callback?: (err?: any) => void): Promise<void> {
		const keys = await this.getAllSessionKeys();

		this.redis.del(keys).then(callback).catch(callback);
	}

	touch(sessionId: string, session: SessionData, callback?: () => void): void {
		const ttl = this.getTTL(session) / 1000;

		this.redis.pExpire(`${PREFIX}${sessionId}`, ttl).finally(callback);
	}

	private getAllSessionKeys(): Promise<string[]> {
		return this.redis.keys(`${PREFIX}*`);
	}

	private getTTL({ cookie }: SessionData): number {
		return cookie.originalMaxAge || SESSION_MAX_AGE;
	}
}
