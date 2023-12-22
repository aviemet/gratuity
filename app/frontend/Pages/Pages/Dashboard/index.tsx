import React from 'react'
import { Heading, Page, Section } from '@/Components'
import RecentActivityTable from './RecentActivityTable'

interface IDashboardProps {
	activities: Schema.ActivitiesDashboard[]
}

const Dashboard = ({ activities }: IDashboardProps) => {
	return (
		<Page title="Dashboard" breadcrumbs={ [
			{ href: '/dashboard', title: 'Dashboard' },
		] }>

			<Section>
				<Heading order={ 2 }>Recent Activity</Heading>
				<RecentActivityTable activities={ activities } />
			</Section>
		</Page>
	)
}

export default Dashboard
