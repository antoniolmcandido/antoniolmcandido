import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTelegram, FaFacebook, FaDropbox } from 'react-icons/fa';
import 'academicons/css/academicons.min.css'

const FooterSection = styled.footer`
  padding: 3rem 2rem;
  background: #1a1a2e;
  color: #fff;
  text-align: center;
`;

const SocialIcons = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SocialItem = styled.li`
  margin: 0 0.8rem;
  
  @media (max-width: 576px) {
    margin: 0.5rem;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff4d4d;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 77, 77, 0.3);
  }
`;

const Divider = styled.hr`
  width: 80px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 auto 1.5rem;
  border: none;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`;

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <i className="ai ai-lattes" />, url: 'https://lattes.cnpq.br/1979480990064707', delay: 0.9 },
    { id: 2, icon: <i className="ai ai-google-scholar" />, url: 'https://scholar.google.com.br/citations?user=5Hg2Z44AAAAJ&hl', delay: 0.9 },
    { id: 3, icon: <i className="ai ai-orcid" />, url: 'https://orcid.org/0000-0001-5839-0273', delay: 0.9 },
    { id: 4, icon: <i className="ai ai-arxiv" />, url: 'https://arxiv.org/search/cs?searchtype=author&query=Candido,+A+L+M', delay: 0.9 },
    { id: 5, icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/antoniolmcandido', delay: 0.9 },
    { id: 6, icon: <FaGithub />, url: 'https://github.com/antoniolmcandido', delay: 0.9 },
    { id: 7, icon: <FaInstagram />, url: 'https://instagram.com/antoniolmcandido', delay: 0.9 },
    { id: 8, icon: <FaFacebook />, url: 'https://facebook.com/antoniolmcandido', delay: 0.9 },
    { id: 9, icon: <FaTelegram />, url: 'https://t.me/antoniolmcandido', delay: 0.9 },
    { id: 10, icon: <FaDropbox />, url: 'https://bit.ly/antoniolmcandidobox', delay: 0.9 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <FooterSection>
      <SocialIcons
        as={motion.ul}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {socialLinks.map((link) => (
          <SocialItem key={link.id} as={motion.li} variants={itemVariants}>
            <SocialLink 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </SocialLink>
          </SocialItem>
        ))}
      </SocialIcons>
      
      <Divider />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Copyright>Copyright 2010 - {new Date().getFullYear()} © Antonio L M Candido</Copyright>
      </motion.div>
    </FooterSection>
  );
};

export default Footer;