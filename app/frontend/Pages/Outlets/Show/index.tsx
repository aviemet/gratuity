import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowOutletProps {
	outlet: Schema.OutletsShow
}

const ShowOutlet = ({ outlet }: IShowOutletProps) => {
	const title =  'Outlet'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Outlet', href: Routes.outlets() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editOutlet(outlet.id) }>
								Edit Outlet
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowOutlet
