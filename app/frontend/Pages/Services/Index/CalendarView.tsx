import { Calendar } from '@mantine/dates'
import React from 'react'
import * as classes from './CalendarView.css'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'

const CalendarView = () => {
	return (
		<Calendar
			className={classes.calendar}
			renderDay={(date: Date) => (
				<Link href={Routes.service(formatter.date.link(date))}>{date.getDate()}</Link>
			)}
		/>
	)
}

export default CalendarView