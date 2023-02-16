import React from 'react'
import { LinkContent } from './styled'

const Link = ({ url = '#', text = '', className = '' }) => {
	return (
		<LinkContent href={url} target="_blank" className={className}>
			{ text }
		</LinkContent>
	)
}

export default Link