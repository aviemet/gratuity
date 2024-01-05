import React, { forwardRef } from 'react'
import { Menu, createPolymorphicComponent, type MenuItemProps } from '@mantine/core'
import cx from 'clsx'
import { Link } from '@/Components'
import { ILinkProps } from '../Link'
import * as classes from './Menu.css'

type OmittedLinkProps = 'color'|'children'|'styles'|'variant'|'vars'|'classNames'
interface IMenuItemProps extends MenuItemProps, Omit<ILinkProps, OmittedLinkProps> {
	disabled?: boolean
	type?: string
}

const MenuItem = forwardRef<HTMLAnchorElement, IMenuItemProps>((
	{ children, disabled = false, className, ...props },
	ref,
) => {
	return (
		<Menu.Item
			ref={ ref }
			disabled={ disabled }
			component={ Link }
			className={ cx(classes.menuItem, className, { disabled }) }
			{ ...props }
		>
			{ children }
		</Menu.Item>
	)
})

export default createPolymorphicComponent<typeof Link, IMenuItemProps>(MenuItem)
