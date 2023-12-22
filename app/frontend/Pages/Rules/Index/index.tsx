import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import RulesTable from '../Table'

interface IRuleIndexProps {
	rules: Schema.RulesIndex[]
	pagination: Schema.Pagination
}

const RulesIndex = ({ rules, pagination }: IRuleIndexProps) => {
	return (
		<IndexPageTemplate
			title="Rules"
			model="rules"
			rows={ rules }
			pagination={ pagination }
			deleteRoute={ Routes.rules() }
			menuOptions={ [
				{ label: 'New Rule', href: Routes.newRule(), icon: NewIcon },
			] }
		>
			<RulesTable />
		</IndexPageTemplate>
	)
}

export default RulesIndex
