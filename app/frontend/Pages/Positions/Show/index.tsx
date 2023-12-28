import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowPositionProps {
	position: Schema.PositionsShow
}

const ShowPosition = ({ position }: IShowPositionProps) => {
	const title =  'Position'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Position', href: Routes.positions() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPosition(position.id) }>
								Edit Position
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowPosition
