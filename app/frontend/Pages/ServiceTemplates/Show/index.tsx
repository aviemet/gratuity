import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowServiceTemplateProps {
	service_template: Schema.ServiceTemplatesShow
}

const ShowServiceTemplate = ({ service_template }: IShowServiceTemplateProps) => {
	const title =  'ServiceTemplate'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service Template', href: Routes.serviceTemplates() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editServiceTemplate(service_template.id) }>
								Edit ServiceTemplate
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowServiceTemplate
