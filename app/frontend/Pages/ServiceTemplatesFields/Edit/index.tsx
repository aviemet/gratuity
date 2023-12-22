import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServiceTemplatesFieldsForm from '../Form'

interface IEditServiceTemplatesFieldProps {
	service_templates_field: Schema.ServiceTemplatesFieldsEdit
}

const EditServiceTemplatesField = ({ service_templates_field }: IEditServiceTemplatesFieldProps) => {
	const title = 'Edit Service Templates Field'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service Templates Fields', href: Routes.serviceTemplatesFields() },
			{ title: ServiceTemplatesField, href: Routes.serviceTemplatesField(service_templates_field.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<ServiceTemplatesFieldsForm
					method='put'
					to={ Routes.serviceTemplatesField() }
					service_templates_field={ service_templates_field }
				/>
			</Section>
		</Page>
	)
}

export default EditServiceTemplatesField
