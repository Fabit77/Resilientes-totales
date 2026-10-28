"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["/", "Inicio"],
  ["/historias", "Historias"],
  ["/nosotros", "El proyecto"],
  ["/para-marcas", "Para marcas"],
  ["/contacto", "Contacto"],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link
        href="/"
        className="wordmark"
        aria-label="Resilientes Totales, inicio"
        onClick={() => setOpen(false)}
      >
        RESILIENTES
        <span>
          TOTALES<span className="brand-dot">.</span>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={href === "/para-marcas" ? "nav-brands" : ""}
          >
            {label}
            {href === "/para-marcas" && <ArrowUpRight size={14} />}
          </Link>
        ))}
      </nav>
      <button
        className="menu-toggle"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegación móvil"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {links.map(([href, label]) => (
            <Link
              href={href}
              key={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
