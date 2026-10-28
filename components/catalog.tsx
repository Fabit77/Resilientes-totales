"use client";
import { useState } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { stories } from "@/content/stories";
import { seasons } from "@/content/site";
import { StoryCard } from "./ui";
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
export function Catalog({ initialSeason = "" }: { initialSeason?: string }) {
  const [season, setSeason] = useState(initialSeason);
  const [discipline, setDiscipline] = useState("");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const filtered = stories
    .filter(
      (s) =>
        (!season || s.temporada === Number(season)) &&
        (!discipline || s.disciplina === discipline) &&
        (!category || s.categoría === category) &&
        normalize(s.nombre).includes(normalize(query)),
    )
    .sort(
      (a, b) => Number(b.destacado) - Number(a.destacado) || a.orden - b.orden,
    );
  function reset() {
    setSeason("");
    setDiscipline("");
    setCategory("");
    setQuery("");
  }
  return (
    <section className="section catalog">
      <div className="filters">
        <label className="search-field">
          <Search size={18} />
          <span className="sr-only">Buscar deportista</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca un nombre o un equipo"
            type="search"
          />
        </label>
        <label>
          <span>Temporada</span>
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="">Todas las temporadas</option>
            {seasons.map((s) => (
              <option value={s.number} key={s.number}>
                T{s.number} · {s.year}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Disciplina</span>
          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          >
            <option value="">Todas las disciplinas</option>
            {[...new Set(stories.map((s) => s.disciplina))].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Categoría</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {[...new Set(stories.map((s) => s.categoría))].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="catalog-status">
        <p role="status" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "historia" : "historias"}{" "}
          en esta selección
        </p>
        {(season || discipline || category || query) && (
          <button onClick={reset}>
            Limpiar filtros <X size={14} />
          </button>
        )}
      </div>
      {filtered.length ? (
        <div className="story-grid">
          {filtered.map((s, i) => (
            <StoryCard key={s.id} story={s} index={i} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="eyebrow">EL ARCHIVO SIGUE CRECIENDO</span>
          <h2>Hay más historias por descubrir.</h2>
          <p>
            No hay fichas en esta selección. Las temporadas 2023 y 2024 están
            documentadas en el archivo oficial de 13C; sus fichas se
            incorporarán después de verificar cada episodio.
          </p>
          <button className="button primary" onClick={reset}>
            Ver todas las historias
          </button>
          <a
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.13.cl/c/programas/resilientes-totales"
          >
            Explorar el archivo de 13C <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </section>
  );
}
