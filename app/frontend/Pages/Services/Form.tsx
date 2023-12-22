import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TServiceFormData = {
	service: Schema.ServicesFormData
}

export interface IServiceFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TServiceFormData>) => boolean|void
	service: Schema.ServicesFormData
}

const ServiceForm = ({ method = 'post', service, ...props }: IServiceFormProps) => {
	return (
		<Form
			model="service"
			data={ { service } }
			method={ method }
			{ ...props }
		>
			<TextInput name="date" label="Date" />
			<Submit>{ service.id ? 'Update' : 'Create' } Service</Submit>
		</Form>
	)
}

export default ServiceForm
