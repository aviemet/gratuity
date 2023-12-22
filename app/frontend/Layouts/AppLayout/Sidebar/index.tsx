import React from 'react'
import { useLayoutStore } from '@/lib/store'
import { Divider, Group, AppShell, ThemeIcon, Box } from '@mantine/core'
import cx from 'clsx'
import MenuLink from './MenuLink'
import { Routes } from '@/lib'
import {
	DashboardIcon,
	SettingsIcon,
	LogoutIcon,
	ComponentsIcon,
	UsersIcon,
	UserGroupIcon,
	PeopleIcon,
} from '@/Components/Icons'

import IconProvider from '@/Layouts/Providers/IconProvider'
import * as classes from './Navigation.css'
// import * as classes from './Test'

const Sidebar = () => {
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()

	const handleNavClick = () => toggleSidebarOpen(false)

	return (
		<IconProvider size='24px'>
			<AppShell.Navbar
				p={ 0 }
				hidden={ !sidebarOpen }
				className={ cx(classes.navbar, { [classes.closed]: !sidebarOpen }) }
			>
				<Box m="xs">
					<Group justify="space-between">
						<ThemeIcon radius="md" size="lg">
							<ComponentsIcon />
						</ThemeIcon>
					</Group>
				</Box>

				<Box onClick={ handleNavClick } className={ cx([classes.links]) }>
					<ul>
						<li><MenuLink href={ Routes.dashboard() } icon={ <DashboardIcon /> }>Dashboard</MenuLink></li>
						<Divider />
						<li>
							<MenuLink href={ Routes.people() } icon={ <PeopleIcon /> }>People</MenuLink>
							<ul>
								<li><MenuLink href={ Routes.personGroups() } icon={ <UserGroupIcon /> }>Groups</MenuLink></li>
							</ul>
						</li>
					</ul>
				</Box>

				<Box onClick={ handleNavClick } className={ cx([classes.links]) }>
					<ul>
						<li>
							<MenuLink href={ Routes.settingsGeneralIndex() } icon={ <SettingsIcon /> }>Settings</MenuLink>
							<ul className="up">
								<li><MenuLink href={ Routes.users() } icon={ <UsersIcon /> }>Users</MenuLink></li>
							</ul>
						</li>
						<li><MenuLink href={ Routes.destroyUserSession() } icon={ <LogoutIcon /> }>Logout</MenuLink></li>
					</ul>
				</Box>
			</AppShell.Navbar>
		</IconProvider>
	)
}

export default Sidebar
