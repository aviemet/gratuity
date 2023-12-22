import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowServicesPeriodProps {
	services_period: Schema.ServicesPeriodsShow
}

const ShowServicesPeriod = ({ services_period }: IShowServicesPeriodProps) => {
	const title =  'ServicesPeriod'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Services Period', href: Routes.servicesPeriods() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editServicesPeriod(services_period.id) }>
								Edit ServicesPeriod
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowServicesPeriod
