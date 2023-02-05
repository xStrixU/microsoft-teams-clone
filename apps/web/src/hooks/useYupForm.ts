import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import type { FieldPath, FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';
import type { AnyObjectSchema, InferType } from 'yup';

export const useYupForm = <
	TSchema extends AnyObjectSchema,
	FormValues extends FieldValues = InferType<TSchema>
>(
	schemaOrOptions: TSchema | { schema: TSchema; props: UseFormProps<FormValues> },
	submitHandler: SubmitHandler<FormValues>
) => {
	const schema = 'props' in schemaOrOptions ? schemaOrOptions.schema : schemaOrOptions;
	const props = 'props' in schemaOrOptions ? schemaOrOptions.props : {};

	const {
		handleSubmit,
		register: rhfRegister,
		...rest
	} = useForm<FormValues>({
		reValidateMode: 'onSubmit',
		resolver: yupResolver(schema),
		...props,
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
