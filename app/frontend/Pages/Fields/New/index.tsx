import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import FieldForm from '../Form'

interface INewFieldProps {
	field: Schema.FieldsFormData
}

const NewField = ({ ...data }: INewFieldProps) => {
	const title = 'New Field'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Fields', href: Routes.fields() },
			{ title: 'New Field' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<FieldForm
					to={ Routes.fields() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewField
