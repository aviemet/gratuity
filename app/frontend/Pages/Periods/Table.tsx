import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const PeriodTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="start_time">Start_time</Table.Cell>
					<Table.Cell sort="end_time">End_time</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (period: Schema.PeriodsIndex) => (
					<Table.Row key={ period.id }>
						<Table.Cell>
							<Link href={ Routes.period(period.id) }>{ period.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.period(period.id) }>{ period.start_time }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.period(period.id) }>{ period.end_time }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editPeriod(period.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PeriodTable
