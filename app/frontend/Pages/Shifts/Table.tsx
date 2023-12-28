import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ShiftTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="start_time">Start_time</Table.Cell>
					<Table.Cell sort="end_time">End_time</Table.Cell>
					
					
					
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (shift: Schema.ShiftsIndex) => (
					<Table.Row key={ shift.id }>
						<Table.Cell>
							<Link href={ Routes.shift(shift.id) }>{ shift.start_time }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.shift(shift.id) }>{ shift.end_time }</Link>
						</Table.Cell>
						
						
						
						<Table.Cell>
							<EditButton href={ Routes.editShift(shift.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ShiftTable
