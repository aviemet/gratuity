import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { CalendarIcon, NewIcon, TableViewIcon } from '@/Components/Icons'
import ServicesTable from '../Table'
import { useToggle } from '@mantine/hooks'
import { Box, SegmentedControl } from '@mantine/core'
import CalendarView from './CalendarView'

interface IServiceIndexProps {
	services: Schema.ServicesIndex[]
	pagination: Schema.Pagination
}

const viewOptions = ['calendar', 'table']

const ServicesIndex = ({ services, pagination }: IServiceIndexProps) => {
	const [view, toggleView] = useToggle(viewOptions)

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
			<Box style={ { textAlign: 'right' } }>
				<SegmentedControl
					value={ view }
					onChange={ toggleView }
					data={ [
						{ label: <TableViewIcon />, value: 'table' },
						{ label: <CalendarIcon />, value: 'calendar' },
					] }
				/>
			</Box>
			{ view === 'table' ?
				<ServicesTable />
				:
				<CalendarView services={ services } />
			}
		</IndexPageTemplate>
	)
}

export default ServicesIndex
