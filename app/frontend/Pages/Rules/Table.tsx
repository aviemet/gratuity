import React from 'react'
import { Routes } from '@/lib'
import { Table, Link } from '@/Components'
import { EditButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const RuleTable = (props: ITableProps) => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					
					<Table.Cell sort="operator">Operator</Table.Cell>
					<Table.Cell sort="operation_value">Operation_value</Table.Cell>
					<Table.Cell sort="description">Description</Table.Cell>
					<Table.Cell className="actions">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.RowIterator render={ (rule: Schema.RulesIndex) => (
					<Table.Row key={ rule.id }>
						<Table.Cell>
							<Link href={ Routes.rule(rule.id) }>{ rule.name }</Link>
						</Table.Cell>
						
						<Table.Cell>
							<Link href={ Routes.rule(rule.id) }>{ rule.operator }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.rule(rule.id) }>{ rule.operation_value }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.rule(rule.id) }>{ rule.description }</Link>
						</Table.Cell>
						<Table.Cell>
							<EditButton href={ Routes.editRule(rule.id) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default RuleTable
