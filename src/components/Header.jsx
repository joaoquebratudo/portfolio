'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#contato', label: 'Contato' }
]

function Header() {
  useEffect(() => {
    // Carrega apenas o necessario para o menu mobile sem puxar o bundle inteiro.
    import('bootstrap/js/dist/collapse')
  }, [])

  return (
    <header className="navbar-custom fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">
            Nunes Tech
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link href={item.href} className="nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>

            <Link href="#contato" className="btn btn-primary">
              Pedir orcamento
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
