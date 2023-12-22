import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ServiceTemplatesTable from '../Table'

interface IServiceTemplateIndexProps {
	service_templates: Schema.ServiceTemplatesIndex[]
	pagination: Schema.Pagination
}

const ServiceTemplatesIndex = ({ service_templates, pagination }: IServiceTemplateIndexProps) => {
	return (
		<IndexPageTemplate
			title="ServiceTemplates"
			model="service_templates"
			rows={ service_templates }
			pagination={ pagination }
			deleteRoute={ Routes.serviceTemplates() }
			menuOptions={ [
				{ label: 'New Service Template', href: Routes.newServiceTemplate(), icon: NewIcon },
			] }
		>
			<ServiceTemplatesTable />
		</IndexPageTemplate>
	)
}

export default ServiceTemplatesIndex
