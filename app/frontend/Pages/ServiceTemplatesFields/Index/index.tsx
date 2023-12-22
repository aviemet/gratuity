import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ServiceTemplatesFieldsTable from '../Table'

interface IServiceTemplatesFieldIndexProps {
	service_templates_fields: Schema.ServiceTemplatesFieldsIndex[]
	pagination: Schema.Pagination
}

const ServiceTemplatesFieldsIndex = ({ service_templates_fields, pagination }: IServiceTemplatesFieldIndexProps) => {
	return (
		<IndexPageTemplate
			title="ServiceTemplatesFields"
			model="service_templates_fields"
			rows={ service_templates_fields }
			pagination={ pagination }
			deleteRoute={ Routes.serviceTemplatesFields() }
			menuOptions={ [
				{ label: 'New Service Templates Field', href: Routes.newServiceTemplatesField(), icon: NewIcon },
			] }
		>
			<ServiceTemplatesFieldsTable />
		</IndexPageTemplate>
	)
}

export default ServiceTemplatesFieldsIndex
