import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowRuleProps {
	rule: Schema.RulesShow
}

const ShowRule = ({ rule }: IShowRuleProps) => {
	const title =  'Rule'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Rule', href: Routes.rules() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editRule(rule.id) }>
								Edit Rule
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowRule
