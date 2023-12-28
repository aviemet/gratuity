import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const PositionTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="slug">Slug</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (position: Schema.PositionsIndex) => (
					<Table.Row key={ position.id }>
						<Table.Cell>
							<Link href={ Routes.position(position.id) }>{ position.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.position(position.id) }>{ position.slug }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editPosition(position.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default PositionTable
