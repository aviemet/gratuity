import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import FieldsTable from '../Table'

interface IFieldIndexProps {
	fields: Schema.FieldsIndex[]
	pagination: Schema.Pagination
}

const FieldsIndex = ({ fields, pagination }: IFieldIndexProps) => {
	return (
		<IndexPageTemplate
			title="Fields"
			model="fields"
			rows={ fields }
			pagination={ pagination }
			deleteRoute={ Routes.fields() }
			menuOptions={ [
				{ label: 'New Field', href: Routes.newField(), icon: NewIcon },
			] }
		>
			<FieldsTable />
		</IndexPageTemplate>
	)
}

export default FieldsIndex
