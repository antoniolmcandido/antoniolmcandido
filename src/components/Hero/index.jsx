import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('./images/bg-pattern.svg');
  opacity: 0.1;
  z-index: 1;
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff4d4d;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 20px rgba(255, 77, 77, 0.5);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background: #ff4d4d;
    color: #fff;
    border: 2px solid #ff4d4d;
    
    &:hover {
      background: #ff3333;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(255, 77, 77, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
    }
  }
  
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroOverlay />
      <HeroContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProfileImage 
            src="/images/picture.webp" 
            alt="Candido"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 25px rgba(255, 77, 77, 0.7)"
            }}
          />
        </motion.div>
        
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Candido
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Professor / Cientista de Dados
        </HeroSubtitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Desenvolvedor Web / Suporte Técnico
        </HeroSubtitle>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Button 
            href="#projects" 
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projetos
          </Button>
          <Button 
            href="#about" 
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sobre Mim
          </Button>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;