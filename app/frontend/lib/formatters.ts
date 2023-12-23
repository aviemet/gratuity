import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const currency = (amount: number, currency = 'USD') => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	})
	return formatter.format(amount)
}

export const date = {
	short: (date: string | Date) => dayjs(new Date(date)).format('MM/DD/YYYY'),
	long: (date: string | Date) => dayjs(new Date(date)).format('MM/DD/YYYY HH:mm:ss'),
	relative: (date: string | Date) => dayjs(new Date(date)).fromNow(),
	english: (date: string | Date) => dayjs(new Date(date)).format('MMMM DD, YYYY'),
	time: (date: string | Date) => dayjs(new Date(date)).format('HH:mm:ss'),
	link: (date: string | Date) => dayjs(new Date(date)).format('YYYY-MM-DD')
}
