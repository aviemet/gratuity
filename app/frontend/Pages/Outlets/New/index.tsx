import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import OutletForm from '../Form'

interface INewOutletProps {
	outlet: Schema.OutletsFormData
}

const NewOutlet = ({ ...data }: INewOutletProps) => {
	const title = 'New Outlet'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Outlets', href: Routes.outlets() },
			{ title: 'New Outlet' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<OutletForm
					to={ Routes.outlets() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewOutlet
