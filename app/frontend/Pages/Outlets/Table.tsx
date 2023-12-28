import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const OutletTable = (props: ITableProps) => {
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
				<Table.RowIterator render={ (outlet: Schema.OutletsIndex) => (
					<Table.Row key={ outlet.id }>
						<Table.Cell>
							<Link href={ Routes.outlet(outlet.id) }>{ outlet.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.outlet(outlet.id) }>{ outlet.slug }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editOutlet(outlet.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default OutletTable
