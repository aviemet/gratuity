import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import ServicesPeriodsTable from '../Table'

interface IServicesPeriodIndexProps {
	services_periods: Schema.ServicesPeriodsIndex[]
	pagination: Schema.Pagination
}

const ServicesPeriodsIndex = ({ services_periods, pagination }: IServicesPeriodIndexProps) => {
	return (
		<IndexPageTemplate
			title="ServicesPeriods"
			model="services_periods"
			rows={ services_periods }
			pagination={ pagination }
			deleteRoute={ Routes.servicesPeriods() }
			menuOptions={ [
				{ label: 'New Services Period', href: Routes.newServicesPeriod(), icon: NewIcon },
			] }
		>
			<ServicesPeriodsTable />
		</IndexPageTemplate>
	)
}

export default ServicesPeriodsIndex
