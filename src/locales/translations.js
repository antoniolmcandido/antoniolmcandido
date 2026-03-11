export const translations = {
  'pt-BR': {
    // Header
    nav: {
      home: 'INÍCIO',
      projects: 'PROJETOS',
      about: 'SOBRE MIM'
    },
    // Hero
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Antonio L M Candido',
      role: 'Professor',
      subtitle: 'Cientista de Dados',
      contactButton: 'Entre em Contato',
      portfolioButton: 'Meu Portfólio'
    },
    // Projects
    projects: {
      sectionNumber: '01',
      title: 'PROJETOS',
      items: [
        {
          title: 'DESENVOLVIMENTO WEB',
          description: 'Inclusão de empresas na rede mundial de computadores, utilizando ótimas ferramentas e técnicas para alcançar os melhores resultados.'
        },
        {
          title: 'AULAS PARTICULARES',
          description: 'Aulas personalizadas para atender às necessidades específicas de cada aluno sobre diversas disciplinas de ciência da computação.'
        },
        {
          title: 'SUPORTE',
          description: 'Suporte técnico em aplicações web e redes de computadores, instalações e configurações de hardware e software.'
        },
        {
          title: 'PADRÃO ABNT',
          description: 'Formatação de Trabalhos Acadêmicos e Técnico-científicos: Anteprojetos, Projetos, Artigos, Monografias, Dissertações e Teses.'
        },
        {
          title: 'MÍDIAS SOCIAIS',
          description: 'Elaboração de perfis e impulsionamento nas mídias sociais. Influência Digital que aumenta consideravelmente o número de seguidores.'
        },
        {
          title: 'CATALOGAÇÃO ONLINE',
          description: 'Software gerador de Ficha Catalográfica de trabalhos acadêmicos. Praticidade e comodidade para as instituições de ensino.'
        }
      ],
      learnMore: 'Saiba mais'
    },
    // About
    about: {
      sectionNumber: '02',
      title: 'SOBRE MIM',
      subtitle: 'PROFESSOR',
      role: 'Cientista de Dados',
      tabs: {
        education: 'FORMAÇÃO',
        work: 'ATUAÇÃO'
      },
      education: {
        p1: 'Doutorando em Ciência da Computação pela Universidade Estadual do Ceará - UECE, Mestre e Bacharel em Ciência da Computação pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará - IFCE.',
        p2: 'Meus interesses de pesquisa e produções estão nas áreas de Ciência de Dados, Linguagens de Programação, Desenvolvimento Web e Sistemas Embarcados.'
      },
      work: {
        p1: 'Professor de Ciência de Dados, com experiência em aprendizado de máquina, processamento de linguagem natural e adaptação de domínio. Realizo manutenção técnica em hardware e redes de computadores; Desenvolvo programas e sistemas web, sites, lojas e escolas virtuais.',
        p2: 'Também atuo com edição e formatação de trabalhos acadêmicos e técnico-científicos: Teses, Dissertações, Monografias, Projetos e Artigos.'
      }
    },
    // Footer
    footer: {
      copyright: 'Copyright 2010 - {year} © Antonio L M Candido'
    }
  },
  'en-US': {
    // Header
    nav: {
      home: 'HOME',
      projects: 'PROJECTS',
      about: 'ABOUT ME'
    },
    // Hero
    hero: {
      greeting: 'Hello, I am',
      name: 'Antonio L M Candido',
      role: 'Professor',
      subtitle: 'Data Scientist',
      contactButton: 'Contact Me',
      portfolioButton: 'My Portfolio'
    },
    // Projects
    projects: {
      sectionNumber: '01',
      title: 'PROJECTS',
      items: [
        {
          title: 'WEB DEVELOPMENT',
          description: 'Inclusion of companies in the world wide web, using excellent tools and techniques to achieve the best results.'
        },
        {
          title: 'PRIVATE LESSONS',
          description: 'Personalized classes to meet the specific needs of each student on various computer science disciplines.'
        },
        {
          title: 'SUPPORT',
          description: 'Technical support in web applications and computer networks, hardware and software installations and configurations.'
        },
        {
          title: 'ABNT STANDARD',
          description: 'Formatting of Academic and Technical-Scientific Works: Pre-projects, Projects, Articles, Monographs, Dissertations and Theses.'
        },
        {
          title: 'SOCIAL MEDIA',
          description: 'Profile creation and boosting on social media. Digital Influence that considerably increases the number of followers.'
        },
        {
          title: 'ONLINE CATALOGING',
          description: 'Cataloging form generator software for academic works. Practicality and convenience for educational institutions.'
        }
      ],
      learnMore: 'Learn more'
    },
    // About
    about: {
      sectionNumber: '02',
      title: 'ABOUT ME',
      subtitle: 'PROFESSOR',
      role: 'Data Scientist',
      tabs: {
        education: 'EDUCATION',
        work: 'EXPERIENCE'
      },
      education: {
        p1: 'PhD student in Computer Science at the State University of Ceará - UECE, Master and Bachelor in Computer Science from the Federal Institute of Education, Science and Technology of Ceará - IFCE.',
        p2: 'My research interests and productions are in the areas of Data Science, Programming Languages, Web Development and Embedded Systems.'
      },
      work: {
        p1: 'Data Science Professor, with experience in machine learning, natural language processing and domain adaptation. I perform technical maintenance on hardware and computer networks; I develop web programs and systems, websites, stores and virtual schools.',
        p2: 'I also work with editing and formatting academic and technical-scientific works: Theses, Dissertations, Monographs, Projects and Articles.'
      }
    },
    // Footer
    footer: {
      copyright: 'Copyright 2010 - {year} © Antonio L M Candido'
    }
  }
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
};
