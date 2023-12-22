import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServicesForm from '../Form'

interface IEditServiceProps {
	service: Schema.ServicesEdit
}

const EditService = ({ service }: IEditServiceProps) => {
	const title = 'Edit Service'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Services', href: Routes.services() },
			{ title: Service, href: Routes.service(service.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<ServicesForm
					method='put'
					to={ Routes.service() }
					service={ service }
				/>
			</Section>
		</Page>
	)
}

export default EditService
