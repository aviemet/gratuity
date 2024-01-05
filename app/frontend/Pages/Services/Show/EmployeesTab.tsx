import { Table } from '@/Components'
import { PeopleDropdown } from '@/Components/Dropdowns'
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
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.Cell>Employee</Table.Cell>
						<Table.Cell>In</Table.Cell>
						<Table.Cell>Out</Table.Cell>
						<Table.Cell>Hours</Table.Cell>
						<Table.Cell>Position</Table.Cell>
					</Table.Row>
				</Table.Head>
				<Table.Body>
					<Table.Row>
						<Table.Cell colSpan={ 5 }>
							<PeopleDropdown label="Employee" />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</Form>
	)
}

export default EmployeesTab
