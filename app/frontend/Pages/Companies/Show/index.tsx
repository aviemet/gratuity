import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowCompanyProps {
	company: Schema.CompaniesShow
}

const ShowCompany = ({ company }: IShowCompanyProps) => {
	const title =  'Company'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Company', href: Routes.companies() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editCompany(company.id) }>
								Edit Company
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowCompany
