import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TPeriodFormData = {
	period: Schema.PeriodsFormData
}

export interface IPeriodFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TPeriodFormData>) => boolean|void
	period: Schema.PeriodsFormData
}

const PeriodForm = ({ method = 'post', period, ...props }: IPeriodFormProps) => {
	return (
		<Form
			model="period"
			data={ { period } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="start_time" label="Start_time" />
			<TextInput name="end_time" label="End_time" />
			<Submit>{ period.id ? 'Update' : 'Create' } Period</Submit>
		</Form>
	)
}

export default PeriodForm
