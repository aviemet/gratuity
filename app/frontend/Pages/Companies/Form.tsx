import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TCompanyFormData = {
	company: Schema.CompaniesFormData
}

export interface ICompanyFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TCompanyFormData>) => boolean|void
	company: Schema.CompaniesFormData
}

const CompanyForm = ({ method = 'post', company, ...props }: ICompanyFormProps) => {
	return (
		<Form
			model="company"
			data={ { company } }
			method={ method }
			{ ...props }
		>
			<TextInput name="name" label="Name" />
			<TextInput name="slug" label="Slug" />
			<Submit>{ company.id ? 'Update' : 'Create' } Company</Submit>
		</Form>
	)
}

export default CompanyForm
