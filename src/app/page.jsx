'use client'

import Image from 'next/image'
import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'

const WHATSAPP_NUMBER = '5516993948138'

const siteTypeOptions = ['Site comum', 'Landing Page', 'Site institucional']

// Cases visuais reaproveitados dos projetos de demonstracao.
const projects = [
  {
    src: '/assets/img/barbearia-hero.jpg',
    alt: 'Preview do projeto de barbearia',
    label: 'Barbearia',
    description:
      'Landing page criada para uma barbearia, com visual forte, apresentação clara dos serviços e agendamento direto pelo WhatsApp, pensada para transmitir estilo, confiança e praticidade ao cliente.',
    extraImages: [
      '/assets/img/barbearia-servico.jpg',
      '/assets/img/barbearia-agendamento.jpg'
    ]
  },
  {
    src: '/assets/img/eletricista-hero.jpg',
    alt: 'Preview do projeto de eletricista',
    label: 'Eletricista',
    description:
      'Site criado para eletricista autônomo, com foco em transmitir segurança, destacar os principais serviços e facilitar pedidos de orçamento com rápido atendimento pelo WhatsApp.',
    extraImages: [
      '/assets/img/eletricista-servico.jpg',
      '/assets/img/eletricista-galeria.jpg'
    ]
  },
  {
    src: '/assets/img/restaurante-hero.jpg',
    alt: 'Preview do projeto de restaurante',
    label: 'Restaurante',
    description:
      'Site institucional desenvolvido para restaurante, com foco na valorização do ambiente, apresentação do cardapio de forma organizada e contato para fazer reservas e pedidos.',
    extraImages: [
      '/assets/img/restaurante-prato.jpg',
      '/assets/img/restaurante-galeria.jpg'
    ]
  }
]

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Bootstrap', 'PHP', 'MySQL']

const initialForm = {
  name: '',
  business: '',
  whatsapp: '',
  email: '',
  message: ''
}

export default function Home() {
  const [formData, setFormData] = useState(initialForm)

  // Atualiza qualquer campo do formulario sem criar handlers separados.
  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value
    }))
  }

  // Monta a mensagem final que sera aberta no WhatsApp com os dados preenchidos.
  function buildWhatsAppMessage() {
    const lines = [
      'Olá, João Vitor. Gostaria de pedir um orçamento.',
      '',
      `Nome: ${formData.name || ' '}`,
      `Tipo de site: ${formData.business || ' '}`,
      `WhatsApp do cliente: ${formData.whatsapp || ' '}`,
      `Email: ${formData.email || ' '}`,
      `Descricao do site: ${formData.message || ' '}`
    ]

    return encodeURIComponent(lines.join('\n'))
  }

  const whatsappBudgetLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`

  return (
    <>
      {/* Hero com proposta principal + formulario de contato rapido */}
      <section className="hero-landing" id="inicio">
        <div className="hero-fluid">
          <div className="hero-shell">
            <div className="hero-layout">
              <div className="hero-copy">
                <span className="hero-kicker">Tenha um site moderno para o seu negócio</span>
                <h1 className="hero-title">
                  Desenvolvedor full stack. Já tem uma ideia para o seu negócio? Então vamos colocá-la em prática!
                </h1>
                <p className="hero-description">
                  Crio estruturas modernas, com visual marcante e foco em conversão de visitante para cliente, visando destacar
                  seus serviços, fortalecer sua marca e facilitar o contato com novos clientes.
                </p>
              </div>

              <form className="hero-form">
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
                    <span>Tipo de site</span>
                    <select
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                    >
                      <option value="">Selecione uma opção</option>
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
                      placeholder="Seu número"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </label>

                  <label className="field-group">
                    <span>Email (opcional)</span>
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
                  <span>Descricao do site (opcional)</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Se quiser, descreva rapidamente como voce imagina o site."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>

                <div className="hero-form-footer">
                  <a
                    href={whatsappBudgetLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Pedir orçamento
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Cases principais usados como vitrine visual do portfolio */}
      <section className="content-section" id="projetos">
        <div className="hero-fluid">
          <div className="section-shell">
            <RevealOnScroll className="section-heading">
              <span className="section-kicker">Projetos</span>
              <h2>Alguns modelos de site para mostrar como o seu projeto pode ser apresentado.</h2>
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
                        {project.extraImages.map((image, index) => (
                          <Image
                            key={image}
                            src={image}
                            alt={`${project.label} detalhe ${index + 1}`}
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
                    <h3>{project.label}</h3>
                    <p>{project.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack principal apresentada para recrutadores e clientes */}
      <section className="content-section" id="tecnologias">
        <div className="hero-fluid">
          <div className="section-shell">
            <RevealOnScroll className="section-heading">
              <span className="section-kicker">Tecnologias</span>
              <h2>Ferramentas e tecnologias que posso usar no seu projeto.</h2>
            </RevealOnScroll>

            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <RevealOnScroll
                  className="tech-card"
                  key={tech}
                  delay={index * 70}
                >
                  {tech}
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resumo direto da sua proposta profissional */}
      <section className="content-section" id="sobre">
        <div className="hero-fluid">
          <div className="section-shell section-grid-two">
            <RevealOnScroll className="section-heading" direction="left">
              <span className="section-kicker">Sobre</span>
              <h2>Crio paginas pensadas para causar uma primeira impressão forte e ajudar a transformar visitantes em clientes.</h2>
            </RevealOnScroll>

            <RevealOnScroll className="section-card" direction="right" delay={120}>
              <p>
                Atuo como desenvolvedor full stack, com foco em páginas comuns,
                landing pages, sites institucionais e manutenção de sites para deixar sua presença digital mais
                profissional, confiável e organizada.
              </p>
              <p className="mb-0">
                Cada projeto é construído para funcionar bem no celular, ter uma forma rápida de se entrar em contato e facilitar os passos iniciais de contratação de serviço.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Canais de contato fixos */}
      <section className="content-section" id="contato">
        <div className="hero-fluid">
          <div className="section-shell section-grid-two">
            <RevealOnScroll className="section-heading" direction="left">
              <span className="section-kicker">Contato</span>
              <h2>Vamos conversar sobre a sua página?</h2>
            </RevealOnScroll>

            <RevealOnScroll className="section-card" direction="right" delay={120}>
              <p>
                WhatsApp:{' '}
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  16993948138
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:jaovitornunes@gmail.com">
                  jaovitornunes@gmail.com
                </a>
              </p>
              <p className="mb-0">
                Me envie uma mensagem com a sua ideia, e eu retorno com os práximos passos.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
