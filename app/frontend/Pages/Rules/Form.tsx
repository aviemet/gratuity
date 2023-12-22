import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TRuleFormData = {
	rule: Schema.RulesFormData
}

export interface IRuleFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TRuleFormData>) => boolean|void
	rule: Schema.RulesFormData
}

const RuleForm = ({ method = 'post', rule, ...props }: IRuleFormProps) => {
	return (
		<Form
			model="rule"
			data={ { rule } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="operator" label="Operator" />
			<TextInput name="operation_value" label="Operation_value" />
			<TextInput name="description" label="Description" />
			<Submit>{ rule.id ? 'Update' : 'Create' } Rule</Submit>
		</Form>
	)
}

export default RuleForm
