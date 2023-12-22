import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServiceTemplatesForm from '../Form'

interface IEditServiceTemplateProps {
	service_template: Schema.ServiceTemplatesEdit
}

const EditServiceTemplate = ({ service_template }: IEditServiceTemplateProps) => {
	const title = 'Edit Service Template'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service Templates', href: Routes.serviceTemplates() },
			{ title: ServiceTemplate, href: Routes.serviceTemplate(service_template.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<ServiceTemplatesForm
					method='put'
					to={ Routes.serviceTemplate() }
					service_template={ service_template }
				/>
			</Section>
		</Page>
	)
}

export default EditServiceTemplate
