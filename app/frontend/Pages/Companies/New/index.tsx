import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CompanyForm from '../Form'

interface INewCompanyProps {
	company: Schema.CompaniesFormData
}

const NewCompany = ({ ...data }: INewCompanyProps) => {
	const title = 'New Company'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Companies', href: Routes.companies() },
			{ title: 'New Company' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<CompanyForm
					to={ Routes.companies() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewCompany
