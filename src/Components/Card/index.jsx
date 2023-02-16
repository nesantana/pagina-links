import React from 'react'
import { Title, Text, CardContent } from './styled'
import PerfilUrl from './perfil.png'

const Card = ({ title = '', text = '' }) => {
	return (
		<CardContent className='text-center'>
			<img src={PerfilUrl} />
			<Title className='my-3'>
				{title}
			</Title>
			<Text>
				{text}
			</Text>
		</CardContent>
	)
}

export default Card