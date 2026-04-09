import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nunes Tech | Sites Profissionais para Negocios Locais',
  description:
    'Criacao de sites profissionais para negocios locais e prestadores de servico, com foco em autoridade, orcamento pelo WhatsApp e conversao.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Nunes Tech | Sites Profissionais para Negocios Locais',
    description:
      'Landing pages e sites institucionais para atrair clientes, transmitir confianca e facilitar pedidos de orcamento.',
    url: siteUrl,
    siteName: 'Nunes Tech',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nunes Tech | Sites Profissionais para Negocios Locais',
    description:
      'Sites para negocios locais e prestadores de servico com foco em apresentacao comercial e geracao de contatos.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
