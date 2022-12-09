import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container } from './style'


const NotFound = () => {

    const history = useHistory()

    const [ title, setTitle ] = useState('404 page not found')

    const [ link, setLink ] = useState('click here to go home')

    
    useEffect(()=> {

        const setCharAt = (str: string, index: number, chr: string) => {
    
            if(index > str.length-1) {
            
                return str
            }
            
            return str.substr(0,index) + chr + str.substr(index+1)
        }
        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=+<>,./?[{()}]!@#$%^&*~`\|'.split('')
        
        let progress404 = 0
        let total404 = title.length
        
        let progressLink = 0
        let totalLink = link.length

        const scrambleInterval = setInterval(function() {
            
            let string404 = '404 page not found'
            let stringLink = 'click here to go home'

            for(var i = 0; i < total404; i++) {
                
                if(i >= progress404) {
                
                    string404 = setCharAt(string404, i, characters[Math.round(Math.random() * (characters.length - 1))])
                } 
            }
            
            for(var i = 0; i < totalLink; i++) {

                if(i >= progressLink) {
                
                    stringLink = setCharAt(stringLink, i, characters[Math.round(Math.random() * (characters.length - 1))])
                } 
            }

            setTitle(string404)
            setLink(stringLink)
    
        }, 1000 / 30)
        
        setTimeout(function() {
            
            const revealInterval = setInterval(() => {

                if(progress404 < total404) {

                    progress404++

                } else if(progressLink < totalLink) {
                    
                    progressLink++
                } else {

                    clearInterval(revealInterval)
                    clearInterval(scrambleInterval)
                }
            }, 50)
        }, 1000)
    }, [])

    return (
        <Container>
            <h2>{ title }</h2>
            <a onClick={ () => history.push('/') }>{ link }</a>
        </Container>
    )
}

export { NotFound }
