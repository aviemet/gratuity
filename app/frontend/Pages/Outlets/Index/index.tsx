import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import OutletsTable from '../Table'

interface IOutletIndexProps {
	outlets: Schema.OutletsIndex[]
	pagination: Schema.Pagination
}

const OutletsIndex = ({ outlets, pagination }: IOutletIndexProps) => {
	return (
		<IndexPageTemplate
			title="Outlets"
			model="outlets"
			rows={ outlets }
			pagination={ pagination }
			deleteRoute={ Routes.outlets() }
			menuOptions={ [
				{ label: 'New Outlet', href: Routes.newOutlet(), icon: NewIcon },
			] }
		>
			<OutletsTable />
		</IndexPageTemplate>
	)
}

export default OutletsIndex
