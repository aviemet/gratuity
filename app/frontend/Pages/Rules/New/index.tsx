import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import RuleForm from '../Form'

interface INewRuleProps {
	rule: Schema.RulesFormData
}

const NewRule = ({ ...data }: INewRuleProps) => {
	const title = 'New Rule'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Rules', href: Routes.rules() },
			{ title: 'New Rule' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<RuleForm
					to={ Routes.rules() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewRule
