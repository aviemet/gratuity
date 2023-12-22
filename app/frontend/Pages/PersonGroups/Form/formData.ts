export const emptyGroup: Schema.PersonGroupsFormData = {
	name: '',
	description: '',
	permissions: {
		person:       { index: true, show: true, create: false, update: false, delete: false },
		user:         { index: true, show: true, create: false, update: false, delete: false },
	},
}
