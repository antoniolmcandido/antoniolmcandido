import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCloud, FaMobile, FaLaptop, FaCompass, FaComment, FaGlobe } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionNumber = styled.strong`
  font-size: 1.5rem;
  color: #ff4d4d;
  display: block;
  margin-bottom: 0.5rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.hr`
  width: 80px;
  height: 3px;
  background: #ff4d4d;
  margin: 0 auto;
  border: none;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #ff4d4d;
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  text-align: center;
`;

const ProjectLink = styled.a`
  color: #ff4d4d;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: auto;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      icon: <FaCloud />,
      title: 'WEB MARKETING',
      description: 'Inclusão de Empresas na rede mundial de computadores, utilizando ótimas ferramentas e técnicas para alcançar os melhores resultados.',
      link: null
    },
    {
      id: 2,
      icon: <FaMobile />,
      title: 'RESPONSIVIDADE',
      description: 'Sites que se adequadam aos mais variados tamanhos de telas, sejam computadores, tablets ou smartphones.',
      link: null
    },
    {
      id: 3,
      icon: <FaLaptop />,
      title: 'SUPORTE',
      description: 'Suporte técnico em aplicações web e redes de computadores, instalações e configurações de hardware e software.',
      link: null
    },
    {
      id: 4,
      icon: <FaCompass />,
      title: 'PADRÃO ABNT',
      description: 'Formatação de Trabalhos Acadêmicos e Técnico-científicos: Anteprojetos, Projetos, Artigos, Monografias, Dissertações e Teses.',
      link: 'https://www.dropbox.com/sh/zoy92sc2rl9jp7w/AACp-iPHZ7h3y2M6v-gQB-NHa?dl=0'
    },
    {
      id: 5,
      icon: <FaComment />,
      title: 'MÍDIAS SOCIAIS',
      description: 'Elaboração de perfis e impulsionamento nas mídias sociais. Influência Digital que aumenta consideravelmente o número de seguidores.',
      link: 'https://instagram.com/antoniolmcandido'
    },
    {
      id: 6,
      icon: <FaGlobe />,
      title: 'CATALOGAÇÃO ONLINE',
      description: 'Software gerador de Ficha Catalográfica de trabalhos acadêmicos. Praticidade e comodidade para as instituições de ensino.',
      link: 'http://www.uece.br/biblioteca/2014/05/27/formulario-eletronico-de-elaboracao-da-ficha-catalografica'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle>
        <SectionNumber>01</SectionNumber>
        <Heading>PROJETOS</Heading>
        <Divider />
      </SectionTitle>
      
      <ProjectsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.id} variants={itemVariants}>
            <IconWrapper>{project.icon}</IconWrapper>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.link && (
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                Saiba mais
              </ProjectLink>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;