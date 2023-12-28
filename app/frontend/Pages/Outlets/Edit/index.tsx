import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import OutletsForm from '../Form'

interface IEditOutletProps {
	outlet: Schema.OutletsEdit
}

const EditOutlet = ({ outlet }: IEditOutletProps) => {
	const title = 'Edit Outlet'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Outlets', href: Routes.outlets() },
			{ title: Outlet, href: Routes.outlet(outlet.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<OutletsForm
					method='put'
					to={ Routes.outlet() }
					outlet={ outlet }
				/>
			</Section>
		</Page>
	)
}

export default EditOutlet
