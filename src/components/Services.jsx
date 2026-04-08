const services = [
  {
    title: 'Landing Page',
    text: 'Página criada para divulgar seu serviço, mostrar seu trabalho e facilitar o contato de novos clientes.'
  },
  {
    title: 'Sites Institucionais',
    text: 'Estruturas profissionais para empresas, negócios locais e profissionais autônomos.'
  },
  {
    title: 'Design Responsivo',
    text: 'Seu site funcionando bem em computador, tablet e celular.'
  },
  {
    title: 'Manutenção e Ajustes',
    text: 'Correções, melhorias visuais e organização de páginas existentes.'
  }
]

function Services() {
  return (
    <section id="servicos" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Serviços</h2>
          <p className="text-secondary mx-auto section-text-limit">
            Soluções pensadas para apresentar melhor o seu negócio e facilitar o contato com clientes.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.title}>
              <div className="content-card h-100 p-4">
                <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                <p className="text-secondary mb-0">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services