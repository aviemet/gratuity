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

type TDateFnArg = string | Date | dayjs.Dayjs

const getDate = (date: TDateFnArg) => {
	if(typeof date === 'string' || date instanceof Date) {
		return dayjs(date)
	}

	return date
}

export const date = {
	short: (date: TDateFnArg) => getDate(date).format('MM/DD/YYYY'),
	link: (date: TDateFnArg) => getDate(date).format('YYYY-MM-DD'),
	long: (date: TDateFnArg) => getDate(date).format('MM/DD/YYYY HH:mm:ss'),
	relative: (date: TDateFnArg) => getDate(date).fromNow(),
	english: (date: TDateFnArg) => getDate(date).format('MMMM DD, YYYY'),
	time: (date: TDateFnArg) => getDate(date).format('HH:mm:ss'),
}
