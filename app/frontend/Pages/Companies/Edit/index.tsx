import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CompaniesForm from '../Form'

interface IEditCompanyProps {
	company: Schema.CompaniesEdit
}

const EditCompany = ({ company }: IEditCompanyProps) => {
	const title = 'Edit Company'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Companies', href: Routes.companies() },
			{ title: Company, href: Routes.company(company.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<CompaniesForm
					method='put'
					to={ Routes.company() }
					company={ company }
				/>
			</Section>
		</Page>
	)
}

export default EditCompany
