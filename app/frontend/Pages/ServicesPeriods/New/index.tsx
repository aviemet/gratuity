import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServicesPeriodForm from '../Form'

interface INewServicesPeriodProps {
	services_period: Schema.ServicesPeriodsFormData
}

const NewServicesPeriod = ({ ...data }: INewServicesPeriodProps) => {
	const title = 'New Services Period'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Services Periods', href: Routes.servicesPeriods() },
			{ title: 'New Services Period' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<ServicesPeriodForm
					to={ Routes.servicesPeriods() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewServicesPeriod
