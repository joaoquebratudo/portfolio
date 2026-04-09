'use client'

import Image from 'next/image'
import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'

const WHATSAPP_NUMBER = '5516993948138'

const siteTypeOptions = [
  'Landing page para servico',
  'Site institucional',
  'Pagina para negocio local',
  'Reformulacao de site atual'
]

const heroPoints = [
  'Copy pensada para gerar mais contatos',
  'Layout profissional e rapido no celular',
  'WhatsApp integrado para pedidos de orcamento'
]

const serviceCards = [
  {
    title: 'Landing page comercial',
    price: 'A partir de R$ 600',
    description:
      'Ideal para prestadores de servico, anuncios e campanhas que precisam transformar visitas em conversas no WhatsApp.'
  },
  {
    title: 'Site institucional',
    price: 'Escopo sob medida',
    description:
      'Perfeito para negocios locais que precisam apresentar servicos, gerar confianca e facilitar pedidos de orcamento.'
  },
  {
    title: 'Reformulacao visual',
    price: 'Analise personalizada',
    description:
      'Atualizo paginas antigas para parecerem mais profissionais, claras e convincentes para novos clientes.'
  }
]

const differentials = [
  {
    title: 'Foco comercial de verdade',
    description:
      'Nao entrego so uma pagina bonita. Estruturo o site para destacar seus servicos, reduzir duvidas e incentivar o contato.'
  },
  {
    title: 'Pensado para negocios locais',
    description:
      'A linguagem, a hierarquia e os CTAs sao organizados para quem vende servicos na cidade e depende de confianca imediata.'
  },
  {
    title: 'Mais praticidade no atendimento',
    description:
      'Formulario e botoes de WhatsApp ajudam o cliente a pedir orcamento rapido, sem precisar procurar informacoes.'
  },
  {
    title: 'Visual profissional em qualquer tela',
    description:
      'O projeto nasce responsivo para transmitir credibilidade no celular, no computador e nos links compartilhados.'
  }
]

const projects = [
  {
    src: '/assets/img/barbearia-hero.jpg',
    alt: 'Preview do projeto de barbearia',
    label: 'Barbearia premium',
    summary: 'Solucao visual para atrair agendamentos e reforcar estilo profissional.',
    description:
      'Projeto apresentado como uma landing page para barbearia que precisava valorizar seus servicos, mostrar estrutura com impacto e levar o visitante direto para o agendamento pelo WhatsApp.',
    extraImages: [
      '/assets/img/barbearia-servico.jpg',
      '/assets/img/barbearia-agendamento.jpg'
    ]
  },
  {
    src: '/assets/img/eletricista-hero.jpg',
    alt: 'Preview do projeto de eletricista',
    label: 'Eletricista autonomo',
    summary: 'Pagina feita para transmitir seguranca e gerar pedidos de orcamento.',
    description:
      'A estrutura destaca servicos essenciais, areas de atendimento e chamada direta para contato rapido, ajudando o profissional a parecer mais confiavel logo no primeiro acesso.',
    extraImages: [
      '/assets/img/eletricista-servico.jpg',
      '/assets/img/eletricista-galeria.jpg'
    ]
  },
  {
    src: '/assets/img/restaurante-hero.jpg',
    alt: 'Preview do projeto de restaurante',
    label: 'Restaurante local',
    summary: 'Site pensado para apresentar ambiente, cardapio e facilitar reservas.',
    description:
      'O conceito organiza informacoes importantes de forma elegante, valoriza imagens do negocio e incentiva o cliente a entrar em contato para reservar ou pedir.',
    extraImages: [
      '/assets/img/restaurante-prato.jpg',
      '/assets/img/restaurante-galeria.jpg'
    ]
  }
]

const technologies = [
  {
    title: 'Paginas rapidas',
    description: 'Estruturas leves para o site abrir bem, segurar a atencao e reduzir abandono.'
  },
  {
    title: 'Experiencia mobile',
    description: 'Layout adaptado para o celular, onde grande parte dos clientes conhece o negocio.'
  },
  {
    title: 'Atualizacao simples',
    description: 'Componentes organizados para facilitar manutencoes, ajustes de copy e expansao futura.'
  },
  {
    title: 'Base confiavel',
    description: 'Tecnologias modernas para manter o projeto estavel, profissional e pronto para evoluir.'
  }
]

const authorityPoints = [
  'Desenvolvedor web focado em sites comerciais para negocios locais e profissionais autonomos.',
  'Atencao especial a copy, clareza da oferta, design responsivo e fluxo de contato.',
  'Projetos criados para fortalecer a imagem do negocio e transformar visitas em oportunidades reais.'
]

const contactBenefits = [
  'Resposta com direcao clara para o seu projeto',
  'Orcamento inicial sem complicacao',
  'Atendimento rapido pelo WhatsApp'
]

const initialForm = {
  name: '',
  business: '',
  whatsapp: '',
  email: '',
  message: ''
}

export default function Home() {
  const [formData, setFormData] = useState(initialForm)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value
    }))
  }

  function buildWhatsAppMessage() {
    const lines = [
      'Ola, Joao Vitor. Gostaria de pedir um orcamento para meu site.',
      '',
      `Nome: ${formData.name || 'Nao informado'}`,
      `Tipo de projeto: ${formData.business || 'Nao informado'}`,
      `WhatsApp: ${formData.whatsapp || 'Nao informado'}`,
      `Email: ${formData.email || 'Nao informado'}`,
      `Objetivo do site: ${formData.message || 'Quero entender a melhor solucao para meu negocio.'}`
    ]

    return encodeURIComponent(lines.join('\n'))
  }

  const whatsappBudgetLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`
  const whatsappDirectLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Ola, Joao Vitor. Quero conversar sobre um site para meu negocio.'
  )}`

  return (
    <>
      <section className="hero-landing" id="inicio">
        <div className="hero-fluid">
          <div className="hero-shell">
            <div className="hero-layout">
              <div className="hero-copy">
                <span className="hero-kicker">Sites para negocios locais e prestadores de servico</span>
                <h1 className="hero-title">
                  Seu negocio precisa de um site que passe confianca e gere pedidos de orcamento.
                </h1>
                <p className="hero-description">
                  Desenvolvo paginas profissionais, modernas e orientadas para conversao, com foco em apresentar
                  bem seu servico, valorizar sua marca e levar o cliente ao contato com mais rapidez.
                </p>

                <div className="hero-badges">
                  <span className="hero-badge">A partir de R$ 600</span>
                  <span className="hero-badge">WhatsApp integrado</span>
                  <span className="hero-badge">Visual profissional no celular</span>
                </div>

                <div className="hero-actions">
                  <a
                    href={whatsappDirectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Pedir orcamento no WhatsApp
                  </a>
                  <a href="#projetos" className="btn btn-outline-primary btn-lg">
                    Ver exemplos de site
                  </a>
                </div>

                <div className="hero-proof-grid">
                  {heroPoints.map((point, index) => (
                    <RevealOnScroll key={point} className="proof-card" delay={index * 90}>
                      <strong>{point}</strong>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>

              <form className="hero-form" id="orcamento">
                <div className="offer-card">
                  <span className="offer-label">Orcamento inicial</span>
                  <strong className="offer-price">Sites a partir de R$ 600</strong>
                  <p>
                    Me envie os dados do seu projeto e eu retorno com uma proposta pensada para o seu objetivo.
                  </p>
                </div>

                <div className="hero-form-grid">
                  <label className="field-group">
                    <span>Seu nome</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Como posso te chamar?"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="field-group">
                    <span>Tipo de projeto</span>
                    <select name="business" value={formData.business} onChange={handleChange}>
                      <option value="">Selecione uma opcao</option>
                      {siteTypeOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="field-group">
                    <span>WhatsApp</span>
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="Seu numero"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="field-group">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="voce@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <label className="field-group">
                  <span>O que seu site precisa resolver?</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Exemplo: preciso apresentar meus servicos, parecer mais profissional e receber pedidos pelo WhatsApp."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>

                <div className="hero-form-footer">
                  <a
                    href={whatsappBudgetLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg w-100"
                  >
                    Solicitar orcamento agora
                  </a>
                </div>

                <p className="form-note">Retorno com os proximos passos e uma direcao inicial para o projeto.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="servicos">
        <div className="hero-fluid">
          <div className="section-shell">
            <RevealOnScroll className="section-heading">
              <span className="section-kicker">Servicos</span>
              <h2>Solucoes criadas para transformar sua presenca online em uma vitrine mais convincente.</h2>
              <p className="section-lead">
                Cada formato e pensado para ajudar o cliente a entender seu servico, confiar no seu negocio e pedir
                orcamento com mais facilidade.
              </p>
            </RevealOnScroll>

            <div className="service-grid">
              {serviceCards.map((service, index) => (
                <RevealOnScroll as="article" className="service-card" key={service.title} delay={index * 100}>
                  <span className="service-price">{service.price}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contato" className="inline-link">
                    Quero um site assim
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="sobre">
        <div className="hero-fluid">
          <div className="section-shell authority-shell">
            <div className="section-grid-two authority-grid">
              <RevealOnScroll className="section-heading section-heading-left" direction="left">
                <span className="section-kicker">Autoridade</span>
                <h2>Desenvolvimento web com olhar comercial para quem precisa vender mais e parecer mais profissional.</h2>
              </RevealOnScroll>

              <RevealOnScroll className="section-card authority-card" direction="right" delay={120}>
                <p>
                  Sou Joao Vitor, desenvolvedor web com foco em criar sites para negocios locais, autonomos e
                  prestadores de servico que precisam se apresentar melhor online e gerar mais oportunidades de contato.
                </p>
                <p>
                  Meu trabalho une design limpo, estrutura estrategica e linguagem comercial para fazer o visitante
                  entender rapidamente o valor do seu servico e dar o proximo passo.
                </p>
                <ul className="feature-list">
                  {authorityPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="diferenciais">
        <div className="hero-fluid">
          <div className="section-shell">
            <RevealOnScroll className="section-heading">
              <span className="section-kicker">Diferenciais</span>
              <h2>O site precisa trabalhar a favor do seu negocio, nao apenas ocupar espaco online.</h2>
            </RevealOnScroll>

            <div className="benefit-grid">
              {differentials.map((item, index) => (
                <RevealOnScroll as="article" className="benefit-card" key={item.title} delay={index * 90}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="projetos">
        <div className="hero-fluid">
          <div className="section-shell">
            <RevealOnScroll className="section-heading">
              <span className="section-kicker">Projetos</span>
              <h2>Exemplos de como um site pode apresentar melhor o servico e aumentar a percepcao de valor.</h2>
            </RevealOnScroll>

            <div className="project-grid">
              {projects.map((project, index) => (
                <RevealOnScroll
                  as="article"
                  className="project-card"
                  key={project.label}
                  delay={index * 120}
                >
                  <div className="project-card-media">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={900}
                      height={620}
                      sizes="(max-width: 991px) 100vw, 33vw"
                      priority={index === 0}
                      className="project-shot-image"
                    />
                    {project.extraImages && (
                      <div className="project-card-thumbs">
                        {project.extraImages.map((image, imageIndex) => (
                          <Image
                            key={image}
                            src={image}
                            alt={`${project.label} detalhe ${imageIndex + 1}`}
                            width={320}
                            height={220}
                            sizes="(max-width: 991px) 50vw, 12vw"
                            className="project-thumb-image"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="project-card-body">
                    <span className="project-summary">{project.summary}</span>
                    <h3>{project.label}</h3>
                    <p>{project.description}</p>
                    <a href="#contato" className="inline-link">
                      Quero um projeto com essa proposta
                    </a>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="tecnologias">
        <div className="hero-fluid">
          <div className="section-shell">
            <RevealOnScroll className="section-heading">
              <span className="section-kicker">Tecnologia com valor</span>
              <h2>As ferramentas ficam nos bastidores. O que importa e o resultado que elas entregam para o seu negocio.</h2>
            </RevealOnScroll>

            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <RevealOnScroll className="tech-card" key={tech.title} delay={index * 70}>
                  <h3>{tech.title}</h3>
                  <p>{tech.description}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="hero-fluid">
          <RevealOnScroll className="cta-band">
            <div>
              <span className="section-kicker">Pronto para vender melhor online?</span>
              <h2>Se o seu negocio precisa parecer mais profissional e facilitar o contato, vamos tirar isso do papel.</h2>
            </div>
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg"
            >
              Falar agora no WhatsApp
            </a>
          </RevealOnScroll>
        </div>
      </section>

      <section className="content-section" id="contato">
        <div className="hero-fluid">
          <div className="section-shell contact-shell">
            <div className="section-grid-two contact-grid">
              <RevealOnScroll className="section-heading section-heading-left" direction="left">
                <span className="section-kicker">Contato</span>
                <h2>Solicite seu orcamento e descubra a melhor estrutura para apresentar seu negocio.</h2>
                <p className="section-lead section-lead-left">
                  O caminho mais rapido e pelo WhatsApp. Se preferir, voce tambem pode enviar email com sua ideia.
                </p>
              </RevealOnScroll>

              <RevealOnScroll className="section-card contact-card" direction="right" delay={120}>
                <div className="contact-item">
                  <span>WhatsApp</span>
                  <a href={whatsappDirectLink} target="_blank" rel="noreferrer">
                    (16) 99394-8138
                  </a>
                </div>

                <div className="contact-item">
                  <span>Email</span>
                  <a href="mailto:jaovitornunes@gmail.com">jaovitornunes@gmail.com</a>
                </div>

                <div className="contact-item">
                  <span>Investimento inicial</span>
                  <strong>Projetos a partir de R$ 600</strong>
                </div>

                <ul className="feature-list">
                  {contactBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="contact-actions">
                  <a
                    href={whatsappDirectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Pedir orcamento pelo WhatsApp
                  </a>
                  <a href="mailto:jaovitornunes@gmail.com" className="btn btn-outline-primary btn-lg">
                    Enviar email
                  </a>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
