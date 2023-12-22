import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TServiceTemplateFormData = {
	service_template: Schema.ServiceTemplatesFormData
}

export interface IServiceTemplateFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TServiceTemplateFormData>) => boolean|void
	service_template: Schema.ServiceTemplatesFormData
}

const ServiceTemplateForm = ({ method = 'post', service_template, ...props }: IServiceTemplateFormProps) => {
	return (
		<Form
			model="service_template"
			data={ { service_template } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="description" label="Description" />
			<Submit>{ service_template.id ? 'Update' : 'Create' } ServiceTemplate</Submit>
		</Form>
	)
}

export default ServiceTemplateForm
