import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Components/Card'
import Link from './Components/Link'
import LastVideo from './Assets/last.jpg'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    transition: 0.3 ease-in;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }
`

const social = [
	{
		text: 'Curso Formação Frontend',
		url: 'https://formacaobedev.com.br/pagina-de-vendas/',
		diff: true
	},
	{
		text: 'Curso Gratuito HTML + CSS',
		url: 'https://www.youtube.com/playlist?list=PLvFchzWFz0yPEnBPG0ZOkCSYQ-a7G6au-'
	},
	{
		text: 'Curso Gratuito NextJS + TypeScript',
		url: 'https://www.youtube.com/playlist?list=PLvFchzWFz0yPKjnboH7Oq5jvzuw-7Fl4E'
	},
	{
		text: 'Instagram - @bedev.lab',
		url: 'https://instagram.com/bedev.lab'
	},
	{
		text: 'Tiktok - @bedev.lab',
		url: 'https://tiktok.com/@bedev.lab'
	},
	{
		text: 'WhatsApp - (67) 98151-3750',
		url: 'https://bit.ly/bedevlab-whatsapp'
	}
]

const ImageLastVideo = styled.img`
  width: 100%;
  border-radius: 20px;
`

const TitleLastVideo = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 14px;
`

const App = () => {
	return (
		<>
			<GlobalStyle />
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-4 col-12'>
						<Card
							title="Mateus Santana - Be Dev Lab"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis nunc tortor, eu gravida nunc consequat in. Nullam aliquam nisi et diam molestie molestie. Suspendisse in ante et est tincidunt placerat. In sapien ante, lacinia et mi non, sodales egestas sapien. Nulla commodo a felis ac commodo."
						/>
						<div className='mt-5'>
							{
								social.map(item => (
									<Link key={item.url} url={item.url} text={item.text} className={`mb-3 ${ item.diff ? 'diff' : '' }`}/>
								))
							}
						</div>
						<a href='https://www.youtube.com/watch?v=m0eBCqfmERw' target="_blank" rel="noreferrer">
							<div>
								<TitleLastVideo className='mt-5 mb-3'>Último Vídeo</TitleLastVideo>
								<ImageLastVideo src={LastVideo} />
							</div>
						</a>
						<div className='my-5 text-center'>
              Criado por alunos da @bedev.lab
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
