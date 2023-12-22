import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import PeriodsTable from '../Table'

interface IPeriodIndexProps {
	periods: Schema.PeriodsIndex[]
	pagination: Schema.Pagination
}

const PeriodsIndex = ({ periods, pagination }: IPeriodIndexProps) => {
	return (
		<IndexPageTemplate
			title="Periods"
			model="periods"
			rows={ periods }
			pagination={ pagination }
			deleteRoute={ Routes.periods() }
			menuOptions={ [
				{ label: 'New Period', href: Routes.newPeriod(), icon: NewIcon },
			] }
		>
			<PeriodsTable />
		</IndexPageTemplate>
	)
}

export default PeriodsIndex
