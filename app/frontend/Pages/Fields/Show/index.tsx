import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowFieldProps {
	field: Schema.FieldsShow
}

const ShowField = ({ field }: IShowFieldProps) => {
	const title =  'Field'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Field', href: Routes.fields() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editField(field.id) }>
								Edit Field
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowField
