import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ServiceTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="date">Date</Table.Cell>
					
					
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (service: Schema.ServicesIndex) => (
					<Table.Row key={ service.id }>
						<Table.Cell>
							<Link href={ Routes.service(service.id) }>{ service.date }</Link>
						</Table.Cell>
						
						
						<Table.Cell>
							<EditButton href={ Routes.editService(service.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ServiceTable
