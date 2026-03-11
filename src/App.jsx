import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Main = styled.main`
    flex: 1;
`

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Adiciona script para redirecionar para HTTPS se necessário
        if (
            location.protocol !== 'https:' &&
            location.hostname !== 'localhost'
        ) {
            location.replace(
                `https:${location.href.substring(location.protocol.length)}`,
            )
        }

        // Simula o preloader do site original
        const timer = setTimeout(() => {
            setIsLoading(false)
            document.body.classList.add('loaded')
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <LanguageProvider>
            <AppContainer>
                <GlobalStyles />
                <Preloader $isLoading={isLoading} />
                <Header />

                <Main>
                    <Hero />
                    <Projects />
                    <About />
                </Main>

                <Footer />
                <ScrollToTop />
            </AppContainer>
        </LanguageProvider>
    )
}

export default App
