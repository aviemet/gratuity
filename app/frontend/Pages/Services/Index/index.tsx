import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ServicesTable from '../Table'

interface IServiceIndexProps {
	services: Schema.ServicesIndex[]
	pagination: Schema.Pagination
}

const ServicesIndex = ({ services, pagination }: IServiceIndexProps) => {
	return (
		<IndexPageTemplate
			title="Services"
			model="services"
			rows={ services }
			pagination={ pagination }
			deleteRoute={ Routes.services() }
			menuOptions={ [
				{ label: 'New Service', href: Routes.newService(), icon: NewIcon },
			] }
		>
			<ServicesTable />
		</IndexPageTemplate>
	)
}

export default ServicesIndex
