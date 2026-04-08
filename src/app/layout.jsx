import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nunes Tech | Desenvolvimento Web',
  description:
    'Nunes Tech especializada em desenvolvimento web, criacao de sites profissionais, landing pages e sites institucionais.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Nunes Tech | Desenvolvimento Web',
    description:
      'Conheca a Nunes Tech, com projetos de sites profissionais, landing pages e solucoes web para negocios.',
    url: siteUrl,
    siteName: 'Nunes Tech',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nunes Tech | Desenvolvimento Web',
    description:
      'Nunes Tech com projetos, tecnologias e formas de contato para desenvolvimento de sites profissionais.'
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
        {/* Estrutura base compartilhada por todas as paginas do portfolio. */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
