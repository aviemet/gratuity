import { Heading, Link, Section, Table, Text } from '@/Components'
import { Routes } from '@/lib'
import React from 'react'

interface IShowUserProps {
	user: Schema.UsersShow
}

const ShowUser = ({ user }: IShowUserProps) => {
	return (
		<>
			<Section>
				<Heading>User: { user.email }</Heading>
			</Section>

		</>
	)
}

export default ShowUser
