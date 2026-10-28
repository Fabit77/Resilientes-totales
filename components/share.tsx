"use client";
import { useState } from "react";
import { Copy, Check, Share2 } from "lucide-react";
export function Share({ title }: { title: string }) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(location.href);
      setStatus("Enlace copiado.");
    } catch {
      setStatus(
        "No fue posible copiar. Puedes copiar la dirección desde tu navegador.",
      );
    }
  }
  function shareTo(provider: string) {
    const url = encodeURIComponent(location.href);
    const text = encodeURIComponent(title);
    window.open(
      provider === "whatsapp"
        ? `https://wa.me/?text=${text}%20${url}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
  async function nativeShare() {
    try {
      if (navigator.share) await navigator.share({ title, url: location.href });
      else await copy();
    } catch {
      setStatus("No se compartió el enlace.");
    }
  }
  return (
    <div className="share">
      <span className="eyebrow">COMPARTE ESTA HISTORIA</span>
      <div>
        <button onClick={copy}>
          {status === "Enlace copiado." ? (
            <Check size={16} />
          ) : (
            <Copy size={16} />
          )}{" "}
          Copiar enlace
        </button>
        <button onClick={() => shareTo("whatsapp")}>WhatsApp ↗</button>
        <button onClick={() => shareTo("linkedin")}>LinkedIn ↗</button>
        <button aria-label="Más opciones para compartir" onClick={nativeShare}>
          <Share2 size={16} />
        </button>
      </div>
      <p role="status">{status}</p>
    </div>
  );
}
