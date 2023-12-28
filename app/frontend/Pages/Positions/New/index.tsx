import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import PositionForm from '../Form'

interface INewPositionProps {
	position: Schema.PositionsFormData
}

const NewPosition = ({ ...data }: INewPositionProps) => {
	const title = 'New Position'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Positions', href: Routes.positions() },
			{ title: 'New Position' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<PositionForm
					to={ Routes.positions() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewPosition
