import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowServiceProps {
	service: Schema.ServicesShow
}

const ShowService = ({ service }: IShowServiceProps) => {
	const title =  'Service'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service', href: Routes.services() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editService(service.id) }>
								Edit Service
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowService
