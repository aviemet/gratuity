import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TServiceTemplatesFieldFormData = {
	service_templates_field: Schema.ServiceTemplatesFieldsFormData
}

export interface IServiceTemplatesFieldFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TServiceTemplatesFieldFormData>) => boolean|void
	service_templates_field: Schema.ServiceTemplatesFieldsFormData
}

const ServiceTemplatesFieldForm = ({ method = 'post', service_templates_field, ...props }: IServiceTemplatesFieldFormProps) => {
	return (
		<Form
			model="service_templates_field"
			data={ { service_templates_field } }
			method={ method }
			{ ...props }
		>
			<Submit>{ service_templates_field.id ? 'Update' : 'Create' } ServiceTemplatesField</Submit>
		</Form>
	)
}

export default ServiceTemplatesFieldForm
