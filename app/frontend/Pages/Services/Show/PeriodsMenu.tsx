import { Box, Button, Link, Menu } from '@/Components'
import { type IMenuProps } from '@/Components/Menu'
import { Routes, formatter } from '@/lib'
import dayjs from 'dayjs'
import React from 'react'

interface PeriodsMenuProps extends IMenuProps {
	periods: Schema.PeriodsOptions[]
	date: dayjs.Dayjs
}

const PeriodsMenu = ({ date, periods, disabled, ...props }: PeriodsMenuProps) => {
	return (
		<Menu disabled={ disabled } { ...props }>
			<Menu.Target>
				<Button variant="outline" disabled={ disabled }>+</Button>
			</Menu.Target>
			<Menu.Dropdown>
				{ periods.map(period => (
					<Link
						key={ period.id }
						href={ Routes.services({
							service: {
								date: formatter.date.link(date),
								period_id: period.id,
							},
						}) }
						method="post"
						style={ { display: 'block' } }
					>
						{ period.name }
					</Link>
				)) }
			</Menu.Dropdown>
		</Menu>
	)
}

export default PeriodsMenu
