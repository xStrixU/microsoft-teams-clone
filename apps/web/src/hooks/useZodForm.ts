import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { FieldPath, FieldValues, SubmitHandler } from 'react-hook-form';
import type { Schema, TypeOf } from 'zod';

export const useZodForm = <
	TSchema extends Schema,
	FormValues extends FieldValues = TypeOf<TSchema>
>(
	schema: TSchema,
	submitHandler: SubmitHandler<FormValues>
) => {
	const {
		handleSubmit,
		register: rhfRegister,
		...rest
	} = useForm<FormValues>({
		reValidateMode: 'onSubmit',
		resolver: zodResolver(schema),
	});

	const register = (fieldPath: FieldPath<FormValues>) => {
		const { errors } = rest.formState;

		return { ...rhfRegister(fieldPath), error: errors[fieldPath] };
	};

	return {
		onSubmit: handleSubmit(submitHandler),
		register,
		...rest,
	};
};
