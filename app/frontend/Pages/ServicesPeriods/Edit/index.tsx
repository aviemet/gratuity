import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServicesPeriodsForm from '../Form'

interface IEditServicesPeriodProps {
	services_period: Schema.ServicesPeriodsEdit
}

const EditServicesPeriod = ({ services_period }: IEditServicesPeriodProps) => {
	const title = 'Edit Services Period'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Services Periods', href: Routes.servicesPeriods() },
			{ title: ServicesPeriod, href: Routes.servicesPeriod(services_period.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<ServicesPeriodsForm
					method='put'
					to={ Routes.servicesPeriod() }
					services_period={ services_period }
				/>
			</Section>
		</Page>
	)
}

export default EditServicesPeriod
