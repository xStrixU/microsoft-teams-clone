import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { FieldValues, SubmitHandler } from 'react-hook-form';
import type { Schema, TypeOf } from 'zod';

export const useZodForm = <
	TSchema extends Schema,
	FormValues extends FieldValues = TypeOf<TSchema>
>(
	schema: TSchema,
	submitHandler: SubmitHandler<FormValues>
) => {
	const { handleSubmit, ...rest } = useForm<FormValues>({
		reValidateMode: 'onSubmit',
		resolver: zodResolver(schema),
	});

	return {
		onSubmit: handleSubmit(submitHandler),
		...rest,
	};
};
