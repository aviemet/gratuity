import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const ServiceTemplateTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="description">Description</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (service_template: Schema.ServiceTemplatesIndex) => (
					<Table.Row key={ service_template.id }>
						<Table.Cell>
							<Link href={ Routes.serviceTemplate(service_template.id) }>{ service_template.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.serviceTemplate(service_template.id) }>{ service_template.description }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editServiceTemplate(service_template.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ServiceTemplateTable
