import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ServicesPeriodTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					
					
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (services_period: Schema.ServicesPeriodsIndex) => (
					<Table.Row key={ services_period.id }>
						
						
						<Table.Cell>
							<EditButton href={ Routes.editServicesPeriod(services_period.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ServicesPeriodTable
