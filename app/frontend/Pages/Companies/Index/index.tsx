import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import CompaniesTable from '../Table'

interface ICompanyIndexProps {
	companies: Schema.CompaniesIndex[]
	pagination: Schema.Pagination
}

const CompaniesIndex = ({ companies, pagination }: ICompanyIndexProps) => {
	return (
		<IndexPageTemplate
			title="Companies"
			model="companies"
			rows={ companies }
			pagination={ pagination }
			deleteRoute={ Routes.companies() }
			menuOptions={ [
				{ label: 'New Company', href: Routes.newCompany(), icon: NewIcon },
			] }
		>
			<CompaniesTable />
		</IndexPageTemplate>
	)
}

export default CompaniesIndex
