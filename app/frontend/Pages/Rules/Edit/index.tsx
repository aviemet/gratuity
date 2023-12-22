import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import RulesForm from '../Form'

interface IEditRuleProps {
	rule: Schema.RulesEdit
}

const EditRule = ({ rule }: IEditRuleProps) => {
	const title = 'Edit Rule'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Rules', href: Routes.rules() },
			{ title: Rule, href: Routes.rule(rule.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<RulesForm
					method='put'
					to={ Routes.rule() }
					rule={ rule }
				/>
			</Section>
		</Page>
	)
}

export default EditRule
