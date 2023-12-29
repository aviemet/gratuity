import { Form } from '@/Components/Form'
import { Routes } from '@/lib'
import React from 'react'

type EmployeeShiftsFormData = {
	shifts: Schema.Shift
}

const EmployeesTab = () => {
	return (
		<Form<EmployeeShiftsFormData>
			model="service"
			data={ { shifts: {} } }
			to={ Routes.shifts() }
		>

		</Form>
	)
}

export default EmployeesTab
