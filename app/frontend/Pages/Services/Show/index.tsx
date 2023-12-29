import React from 'react'
import { Group, Heading, Menu, Page, Section, Tabs } from '@/Components'
import { Routes, formatter } from '@/lib'
import { useLocation } from '@/lib/hooks'
import dayjs from 'dayjs'
import EmployeesTab from '@/Pages/Services/Show/EmployeesTab'

interface IShowServiceProps {
	services: Schema.ServicesShow[]
}

const ShowService = ({ services }: IShowServiceProps) => {
	const { paths } = useLocation()
	const title = `Service for ${formatter.date.english(paths[1].replace('-', '/'))}`


	console.log({ paths })
	// console.log({ services })
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
				<Tabs urlControlled defaultValue="employees">
					<Tabs.List>
						<Tabs.Tab value="employees">Employees</Tabs.Tab>
						{ services.map(service => (
							<Tabs.Tab
								key={ service.id }
								value={ service.period.name }
							>{ service.period.name }
							</Tabs.Tab>
						)) }
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
