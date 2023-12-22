import React from 'react'
import { Field, Form, TextInput, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'
import { usePageProps } from '@/lib/hooks'

type TRegisterFormData = {
	person: {
		first_name: string
		last_name: string
	}
}

const CompleteRegistration = () => {
	const { auth: { user } } = usePageProps()

	const defaultData: TRegisterFormData = {
		person: {
			first_name: user.person?.first_name ?? '',
			last_name: user.person?.last_name ?? '',
		},
	}

	return (
		<Tile>
			<Form
				disableFormatting
				model="person"
				data={ defaultData }
				to={ Routes.completeRegistration() }
			>
				<Tile.Content>
					<div>
						<Heading order={ 2 }>Complete Registration</Heading>
						<p>Let&apos;s get a little more information about you.</p>
					</div>

					<Field>
						<TextInput name="first_name" placeholder="First Name" autoFocus autoComplete="first-name" />
					</Field>

					<Field>
						<TextInput name="last_name" placeholder="Last Name" autoComplete="last-name" />
					</Field>

					<Field mb={ 16 }>
						<Submit>Complete and Log In!</Submit>
					</Field>

				</Tile.Content>
			</Form>
		</Tile>
	)
}

export default CompleteRegistration
