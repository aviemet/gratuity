import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import PositionsTable from '../Table'

interface IPositionIndexProps {
	positions: Schema.PositionsIndex[]
	pagination: Schema.Pagination
}

const PositionsIndex = ({ positions, pagination }: IPositionIndexProps) => {
	return (
		<IndexPageTemplate
			title="Positions"
			model="positions"
			rows={ positions }
			pagination={ pagination }
			deleteRoute={ Routes.positions() }
			menuOptions={ [
				{ label: 'New Position', href: Routes.newPosition(), icon: NewIcon },
			] }
		>
			<PositionsTable />
		</IndexPageTemplate>
	)
}

export default PositionsIndex
