import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServiceTemplatesFieldForm from '../Form'

interface INewServiceTemplatesFieldProps {
	service_templates_field: Schema.ServiceTemplatesFieldsFormData
}

const NewServiceTemplatesField = ({ ...data }: INewServiceTemplatesFieldProps) => {
	const title = 'New Service Templates Field'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service Templates Fields', href: Routes.serviceTemplatesFields() },
			{ title: 'New Service Templates Field' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<ServiceTemplatesFieldForm
					to={ Routes.serviceTemplatesFields() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewServiceTemplatesField
