import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TPositionFormData = {
	position: Schema.PositionsFormData
}

export interface IPositionFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TPositionFormData>) => boolean|void
	position: Schema.PositionsFormData
}

const PositionForm = ({ method = 'post', position, ...props }: IPositionFormProps) => {
	return (
		<Form
			model="position"
			data={ { position } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="slug" label="Slug" />
			<Submit>{ position.id ? 'Update' : 'Create' } Position</Submit>
		</Form>
	)
}

export default PositionForm
