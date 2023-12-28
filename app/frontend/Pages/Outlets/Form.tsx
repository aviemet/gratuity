import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TOutletFormData = {
	outlet: Schema.OutletsFormData
}

export interface IOutletFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TOutletFormData>) => boolean|void
	outlet: Schema.OutletsFormData
}

const OutletForm = ({ method = 'post', outlet, ...props }: IOutletFormProps) => {
	return (
		<Form
			model="outlet"
			data={ { outlet } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="slug" label="Slug" />
			<Submit>{ outlet.id ? 'Update' : 'Create' } Outlet</Submit>
		</Form>
	)
}

export default OutletForm
