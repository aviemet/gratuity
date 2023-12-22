import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TFieldFormData = {
	field: Schema.FieldsFormData
}

export interface IFieldFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TFieldFormData>) => boolean|void
	field: Schema.FieldsFormData
}

const FieldForm = ({ method = 'post', field, ...props }: IFieldFormProps) => {
	return (
		<Form
			model="field"
			data={ { field } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="type" label="Type" />
			<TextInput name="description" label="Description" />
			<Submit>{ field.id ? 'Update' : 'Create' } Field</Submit>
		</Form>
	)
}

export default FieldForm
