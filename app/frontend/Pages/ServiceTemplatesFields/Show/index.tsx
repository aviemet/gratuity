import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowServiceTemplatesFieldProps {
	service_templates_field: Schema.ServiceTemplatesFieldsShow
}

const ShowServiceTemplatesField = ({ service_templates_field }: IShowServiceTemplatesFieldProps) => {
	const title =  'ServiceTemplatesField'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service Templates Field', href: Routes.serviceTemplatesFields() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editServiceTemplatesField(service_templates_field.id) }>
								Edit ServiceTemplatesField
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowServiceTemplatesField
