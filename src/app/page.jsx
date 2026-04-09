'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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
      'Site de página única feita exclusivamente para tornar visistantes em clientes.'
  },
  {
    title: 'Site institucional',
    price: 'Feito sob medida',
    description:
      'Um site mais completo que contém mais páginas e mostre mais sobre a empresa aos visitantes.'
  },
  {
    title: 'Reparar e atualizar',
    price: 'Site pouco visitado?',
    description:
      'Caso já tenha um site e precise implementar novas funções ou atualizações.'
  }
]

const projects = [
  {
    src: '/assets/img/barbearia-hero.jpg',
    alt: 'Preview do projeto de barbearia',
    href: '/assets/img/barbearia-hero.jpg',
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
    href: '/assets/img/eletricista-hero.jpg',
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
    href: '/assets/img/restaurante-hero.jpg',
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
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [openServiceIndex, setOpenServiceIndex] = useState(null)
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false)
  const touchStartX = useRef(null)

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

  function goToPreviousProject() {
    setIsProjectDetailsOpen(false)
    setActiveProjectIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
  }

  function goToNextProject() {
    setIsProjectDetailsOpen(false)
    setActiveProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
  }

  function handleProjectTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleProjectTouchEnd(event) {
    if (touchStartX.current === null) return

    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchStartX.current - touchEndX

    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        goToNextProject()
      } else {
        goToPreviousProject()
      }
    }

    touchStartX.current = null
  }

  useEffect(() => {
    if (isProjectDetailsOpen) return undefined

    const intervalId = window.setInterval(() => {
      setIsProjectDetailsOpen(false)
      setActiveProjectIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [isProjectDetailsOpen])

  const activeProject = projects[activeProjectIndex]
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
                <span className="hero-kicker">Criacao de sites para negocios locais e profissionais autonomos</span>
                <h1 className="hero-title">
                  Seu site precisa explicar bem o seu negocio e transformar visitas em conversas.
                </h1>
                <p className="hero-description">
                  Eu crio paginas com estrutura comercial, visual profissional e foco em conversao para ajudar sua
                  empresa a parecer mais confiavel, apresentar servicos com clareza e facilitar o contato pelo
                  WhatsApp.
                </p>

                <div className="hero-badges">
                  <span className="hero-badge">Estrutura pensada para vender</span>
                  <span className="hero-badge">A partir de R$ 600</span>
                  <span className="hero-badge">Projetos feitos por mim</span>
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
                    Ver projetos criados
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
            <div className="services-layout">
              <RevealOnScroll className="section-heading section-heading-left services-copy" direction="left">
                <span className="section-kicker services-kicker">Servicos</span>
                <h2>Qual site se adequa à sua empresa?</h2>
              </RevealOnScroll>

              <div className="service-grid">
                {serviceCards.map((service, index) => (
                  <RevealOnScroll as="article" className="service-card" key={service.title} delay={index * 100}>
                    <span className="service-price">{service.price}</span>
                    <div className="service-card-actions">
                      <button
                        type="button"
                        className="service-more"
                        onClick={() => setOpenServiceIndex((current) => (current === index ? null : index))}
                        aria-expanded={openServiceIndex === index}
                      >
                        <span>mais</span>
                      </button>
                    </div>
                    <h3>{service.title}</h3>
                    {openServiceIndex === index && (
                      <div className="service-description">
                        <p>{service.description}</p>
                        <button
                          type="button"
                          className="service-description-close"
                          onClick={() => setOpenServiceIndex(null)}
                        >
                          fechar
                        </button>
                      </div>
                    )}
                    <a href="#contato" className="service-cta">
                      Quero este!
                    </a>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="projetos">
        <div className="hero-fluid">
          <div className="section-shell">
            <div className="projects-layout">
              <RevealOnScroll className="section-heading section-heading-left projects-copy" direction="left">
                <span className="section-kicker projects-kicker">Projetos</span>
                <h2>Apresentação de cada modelo de site.</h2>
              </RevealOnScroll>

              <RevealOnScroll className="project-carousel" direction="right">
                <div
                  className="project-carousel-track"
                  onTouchStart={handleProjectTouchStart}
                  onTouchEnd={handleProjectTouchEnd}
                >
                  <button type="button" className="project-carousel-arrow" onClick={goToPreviousProject} aria-label="Projeto anterior">
                    ‹
                  </button>

                  <article className="project-carousel-card">
                    <div className="project-carousel-media">
                      <Image
                        src={activeProject.src}
                        alt={activeProject.alt}
                        width={360}
                        height={360}
                        sizes="(max-width: 991px) 60vw, 280px"
                        priority
                        className="project-carousel-image"
                      />
                    </div>
                    <div className="project-carousel-body">
                      <h3>{activeProject.label}</h3>
                      <button
                        type="button"
                        className="project-more"
                        onClick={() => setIsProjectDetailsOpen((current) => !current)}
                        aria-expanded={isProjectDetailsOpen}
                      >
                        mais
                      </button>
                      <div
                        className={
                          isProjectDetailsOpen
                            ? 'project-description-content is-open'
                            : 'project-description-content'
                        }
                      >
                        <p>{activeProject.description}</p>
                        <button
                          type="button"
                          className="project-description-close"
                          onClick={() => setIsProjectDetailsOpen(false)}
                        >
                          fechar
                        </button>
                      </div>
                      <a
                        href={activeProject.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-summary project-summary-link"
                      >
                        Ver projeto
                      </a>
                      <a href="#contato" className="inline-link">
                        Quero um projeto com essa proposta
                      </a>
                    </div>
                  </article>

                  <button type="button" className="project-carousel-arrow" onClick={goToNextProject} aria-label="Proximo projeto">
                    ›
                  </button>
                </div>

              </RevealOnScroll>
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
