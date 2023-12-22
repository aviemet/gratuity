import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import FieldsForm from '../Form'

interface IEditFieldProps {
	field: Schema.FieldsEdit
}

const EditField = ({ field }: IEditFieldProps) => {
	const title = 'Edit Field'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Fields', href: Routes.fields() },
			{ title: Field, href: Routes.field(field.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<FieldsForm
					method='put'
					to={ Routes.field() }
					field={ field }
				/>
			</Section>
		</Page>
	)
}

export default EditField
