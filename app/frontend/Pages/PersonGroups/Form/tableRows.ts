import { type TPermissions } from '.'

type TTableRow = {
	model: string
	label: string
	permissions: (keyof TPermissions)[]
}

const tableRows: TTableRow[] = [
	{
		model: 'person',
		label: 'People',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'user',
		label: 'Users',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
] as const

export default tableRows
