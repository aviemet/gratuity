import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ServiceTemplatesFieldTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					
					
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (service_templates_field: Schema.ServiceTemplatesFieldsIndex) => (
					<Table.Row key={ service_templates_field.id }>
						
						
						<Table.Cell>
							<EditButton href={ Routes.editServiceTemplatesField(service_templates_field.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ServiceTemplatesFieldTable
