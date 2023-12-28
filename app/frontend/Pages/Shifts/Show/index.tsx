import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowShiftProps {
	shift: Schema.ShiftsShow
}

const ShowShift = ({ shift }: IShowShiftProps) => {
	const title =  'Shift'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Shift', href: Routes.shifts() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editShift(shift.id) }>
								Edit Shift
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowShift
