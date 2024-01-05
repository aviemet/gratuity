import { Calendar } from '@mantine/dates'
import React from 'react'
import * as classes from './CalendarView.css'
import { Badge, Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import dayjs from 'dayjs'

interface CalendarViewProps {
	services: Schema.ServicesIndex[]
}

const today = dayjs()

const CalendarView = ({ services }: CalendarViewProps) => {
	const servicesByDate = Object.groupBy(services, ({ date }) => date)

	return (
		<Calendar
			className={ classes.calendar }
			static
			renderDay={ (date: Date) => {
				const dateStr = formatter.date.link(date)

				return (
					<>
						<Link
							href={ Routes.service(dateStr) }
							as="button"
							variant={ today.isSame(date, 'day') ? 'filled' : 'subtle' }
							size="sm"
						>
							{ date.getDate() }
						</Link>
						{ servicesByDate?.[dateStr]?.map(service => (
							<Badge
								key={ service.id }
								size='xs'
								component={ Link }
								href={ Routes.service(dateStr, { tab: service.period.name.toLocaleLowerCase() }) }
							>
								{ service.period.name }
							</Badge>
						)) }
					</>
				)
			} }
		/>
	)
}

export default CalendarView
