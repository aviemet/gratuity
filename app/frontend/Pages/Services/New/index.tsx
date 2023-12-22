import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ServiceForm from '../Form'

interface INewServiceProps {
	service: Schema.ServicesFormData
}

const NewService = ({ ...data }: INewServiceProps) => {
	const title = 'New Service'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Services', href: Routes.services() },
			{ title: 'New Service' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<ServiceForm
					to={ Routes.services() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewService
