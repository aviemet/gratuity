import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import PeriodForm from '../Form'

interface INewPeriodProps {
	period: Schema.PeriodsFormData
}

const NewPeriod = ({ ...data }: INewPeriodProps) => {
	const title = 'New Period'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Periods', href: Routes.periods() },
			{ title: 'New Period' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<PeriodForm
					to={ Routes.periods() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewPeriod
