import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const CompanyTable = (props: ITableProps) => {
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
				<Table.RowIterator render={ (company: Schema.CompaniesIndex) => (
					<Table.Row key={ company.id }>
						<Table.Cell>
							<Link href={ Routes.company(company.id) }>{ company.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.company(company.id) }>{ company.slug }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editCompany(company.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CompanyTable
