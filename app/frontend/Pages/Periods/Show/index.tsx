import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowPeriodProps {
	period: Schema.PeriodsShow
}

const ShowPeriod = ({ period }: IShowPeriodProps) => {
	const title =  'Period'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Period', href: Routes.periods() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPeriod(period.id) }>
								Edit Period
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowPeriod
