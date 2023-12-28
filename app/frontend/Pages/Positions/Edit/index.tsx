import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import PositionsForm from '../Form'

interface IEditPositionProps {
	position: Schema.PositionsEdit
}

const EditPosition = ({ position }: IEditPositionProps) => {
	const title = 'Edit Position'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Positions', href: Routes.positions() },
			{ title: Position, href: Routes.position(position.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<PositionsForm
					method='put'
					to={ Routes.position() }
					position={ position }
				/>
			</Section>
		</Page>
	)
}

export default EditPosition
