import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../locales/translations'

const AboutSection = styled.section`
    padding: 6rem 2rem;
    background: #fff;
`

const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`

const SectionNumber = styled.strong`
    font-size: 1.5rem;
    color: #ff4d4d;
    display: block;
    margin-bottom: 0.5rem;
`

const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Divider = styled.hr`
    width: 80px;
    height: 3px;
    background: #ff4d4d;
    margin: 0 auto;
    border: none;
`

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`

const ImageContainer = styled(motion.div)`
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        height: 100%;
        display: block;
        transition: transform 0.5s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SubHeading = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
`

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #ff4d4d;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const TabsContainer = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
`

const TabItem = styled.li`
    margin-right: 2rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    color: ${({ $active }) => ($active ? '#ff4d4d' : '#666')};
    border-bottom: ${({ $active }) => ($active ? '2px solid #ff4d4d' : 'none')};
    transition: all 0.3s ease;

    &:hover {
        color: #ff4d4d;
    }
`

const TabContent = styled(motion.div)`
    margin-bottom: 2rem;
`

const Paragraph = styled.p`
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    text-align: justify;
`

const About = () => {
    const [activeTab, setActiveTab] = useState('formacao')
    const { language } = useLanguage()
    const t = translations[language].about

    const tabVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <AboutSection id="about">
            <SectionTitle>
                <SectionNumber>{t.sectionNumber}</SectionNumber>
                <Heading>{t.title}</Heading>
                <Divider />
            </SectionTitle>

            <AboutContainer>
                <ImageContainer
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src="./images/about-img.webp" alt="Candido" />
                </ImageContainer>

                <ContentContainer>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <SubHeading>{t.subtitle}</SubHeading>
                        <MainHeading>{t.role}</MainHeading>
                    </motion.div>

                    <TabsContainer>
                        <TabItem
                            $active={activeTab === 'formacao'}
                            onClick={() => setActiveTab('formacao')}
                        >
                            {t.tabs.education}
                        </TabItem>
                        <TabItem
                            $active={activeTab === 'atuacao'}
                            onClick={() => setActiveTab('atuacao')}
                        >
                            {t.tabs.work}
                        </TabItem>
                    </TabsContainer>

                    {activeTab === 'formacao' && (
                        <TabContent
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            key="formacao"
                        >
                            <Paragraph>{t.education.p1}</Paragraph>
                            <Paragraph>{t.education.p2}</Paragraph>
                        </TabContent>
                    )}

                    {activeTab === 'atuacao' && (
                        <TabContent
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            key="atuacao"
                        >
                            <Paragraph>{t.work.p1}</Paragraph>
                            <Paragraph>{t.work.p2}</Paragraph>
                        </TabContent>
                    )}
                </ContentContainer>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
