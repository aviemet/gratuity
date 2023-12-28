import React from 'react'
import { useLayoutStore } from '@/lib/store'
import { Box, AppShell, Burger, Group } from '@mantine/core'
import cx from 'clsx'
import AvatarMenu from './AvatarMenu'
import * as classes from './TopBar.css'

const Topbar = () => {
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()

	return (
		<AppShell.Header p="sm" className={cx(classes.topbar, { closed: !sidebarOpen })}>
			<Box className={classes.wrapper}>

				<Burger
					aria-label={sidebarOpen ?
						'Collapse Navigation'
						:
						'Expand Navigation'
					}
					opened={sidebarOpen}
					onClick={() => toggleSidebarOpen()}
					size="sm"
					color="white"
				/>

				<Group>
					<AvatarMenu />
				</Group>

			</Box>
		</AppShell.Header>
	)
}

export default Topbar
