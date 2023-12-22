import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const FieldTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="type">Type</Table.Cell>
					<Table.Cell sort="description">Description</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (field: Schema.FieldsIndex) => (
					<Table.Row key={ field.id }>
						<Table.Cell>
							<Link href={ Routes.field(field.id) }>{ field.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.field(field.id) }>{ field.type }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.field(field.id) }>{ field.description }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editField(field.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default FieldTable
