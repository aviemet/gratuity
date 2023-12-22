import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServiceTemplateForm from '../Form'

interface INewServiceTemplateProps {
	service_template: Schema.ServiceTemplatesFormData
}

const NewServiceTemplate = ({ ...data }: INewServiceTemplateProps) => {
	const title = 'New Service Template'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service Templates', href: Routes.serviceTemplates() },
			{ title: 'New Service Template' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<ServiceTemplateForm
					to={ Routes.serviceTemplates() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewServiceTemplate
