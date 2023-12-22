import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import PeriodsForm from '../Form'

interface IEditPeriodProps {
	period: Schema.PeriodsEdit
}

const EditPeriod = ({ period }: IEditPeriodProps) => {
	const title = 'Edit Period'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Periods', href: Routes.periods() },
			{ title: Period, href: Routes.period(period.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<PeriodsForm
					method='put'
					to={ Routes.period() }
					period={ period }
				/>
			</Section>
		</Page>
	)
}

export default EditPeriod
