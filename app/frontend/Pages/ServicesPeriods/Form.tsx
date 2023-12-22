import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TServicesPeriodFormData = {
	services_period: Schema.ServicesPeriodsFormData
}

export interface IServicesPeriodFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TServicesPeriodFormData>) => boolean|void
	services_period: Schema.ServicesPeriodsFormData
}

const ServicesPeriodForm = ({ method = 'post', services_period, ...props }: IServicesPeriodFormProps) => {
	return (
		<Form
			model="services_period"
			data={ { services_period } }
			method={ method }
			{ ...props }
		>
			<Submit>{ services_period.id ? 'Update' : 'Create' } ServicesPeriod</Submit>
		</Form>
	)
}

export default ServicesPeriodForm
