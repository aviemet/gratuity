import React, { useMemo } from 'react'
import { Group, Heading, Menu, Page, Section, Tabs } from '@/Components'
import { Routes, formatter } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { differenceBy } from 'lodash'
import dayjs from 'dayjs'
import EmployeesTab from '@/Pages/Services/Show/EmployeesTab'
import PeriodsMenu from './PeriodsMenu'

interface IShowServiceProps {
	services: Schema.ServicesShow[]
	periods: Schema.PeriodsOptions[]
}

const ShowService = ({ services, periods }: IShowServiceProps) => {
	const { paths } = useLocation()
	const serviceDate = dayjs(paths[1].replace('-', '/'))
	const title = `Service for ${formatter.date.english(serviceDate)}`

	const existingPeriods = useMemo(() => {
		return services.reduce((prev, current): Schema.PeriodsOptions[] => {
			prev.push({ id: current.period.id, name: current.period.name })
			return prev
		}, [] as Schema.PeriodsOptions[])
	}, [services])

	const missingPeriods = differenceBy(periods, existingPeriods, 'id')

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Service', href: Routes.services() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							{ /* <Menu.Link href={Routes.editService(service.id)}>
								Edit Service
							</Menu.Link> */ }
						</Menu.Dropdown>
					</Menu>
				</Group>
				<Tabs urlControlled defaultValue="employees" variant="outline">
					<Tabs.List>
						<Tabs.Tab value="employees">Employees</Tabs.Tab>
						{ services.map(service => (
							<Tabs.Tab
								key={ service.id }
								value={ service.period.name.toLocaleLowerCase() }
							>{ service.period.name }
							</Tabs.Tab>
						)) }
						<PeriodsMenu
							date={ serviceDate }
							periods={ missingPeriods }
							disabled={ missingPeriods.length === 0 }
						/>
					</Tabs.List>

					<Tabs.Panel value="employees">
						<EmployeesTab />
					</Tabs.Panel>
					{ services.map(service => (
						<Tabs.Panel
							key={ service.id }
							value={ service.period.name }
						>
							{ service.period.name }
						</Tabs.Panel>
					)) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default ShowService
