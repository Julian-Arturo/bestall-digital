---
name: Bestall Digital
description: Embudo B2B de alta conversión — sistema de ventas, velocidad y tracking directo a WhatsApp.
colors:
  bg: "#090D16"
  bg-secondary: "#0F172A"
  surface: "#131D31"
  border: "rgba(30, 41, 59, 0.8)"
  cyan-tech: "#38BDF8"
  emerald-cta: "#10B981"
  ink: "#F8FAFC"
  mute: "#94A3B8"
typography:
  display:
    fontFamily: "Bricolage Grotesque"
    fontWeight: 800
  body:
    fontFamily: "Manrope"
    fontWeight: 400
---

# Design System: Bestall Digital (B2B High-Conversion Funnel)

> Scope: Agency home `/`. `/vip` and `/diabetes` preserve their offer funnels.

## Overview

**North Star: Embudo B2B de Alta Conversión**
Diseño tecnológico, contrastado y estructurado para empresas y fundadores que buscan transformar pauta digital en conversaciones y ventas reales en WhatsApp.

- **Base neutra profunda:** Fondo principal Slate/Zinc oscuro (`#090D16` y `#0F172A`).
- **Superficies y tarjetas:** Contenedores en `#131D31` con bordes sutiles de 1px (`rgba(30, 41, 59, 0.8)`) y radios consistentes (`rounded-xl` / `rounded-2xl`).
- **Acentos visuales (Regla 90/10):**
  - **Cian técnico (`#38BDF8`):** Tags de categoría, badges, numeración de pasos e indicadores de estado.
  - **Verde Esmeralda (`#10B981` / hover `#059669`):** Exclusivo para botones de acción principales (WhatsApp / Cotizador / Auditar).
- **Tipografía:** Modular y legible. Bricolage Grotesque (titulares monumentales y contrastados) + Manrope (cuerpo técnico con gris equilibrado `#94A3B8`).
- **Mockups:** Contenedores estilo navegador (`.bd-browser-frame`) con los 3 puntos superiores (`#ff5f56`, `#ffbd2e`, `#27c93f`) y elevación suave, evitando recortes planos.

## Do's

- Botones primarios en Verde Esmeralda (`#10B981`); acciones secundarias tipo ghost con hover cian.
- Mostrar proyectos reales desacoplados (CDA Automotriz, Mecánica VIP, Toma el Control 21 Días) especificando Reto, Solución Técnica y Demo.
- Mantener la jerarquía del wireframe: Header -> Hero con dolor comercial -> Tech Stack Banner -> Dolores -> Método (3 pasos) -> Paquetes (3 focos) -> Casos Reales -> Inversión Transparente -> FAQ -> Footer.
- WhatsApp `573003550715` con mensajes preconfigurados según el punto de contacto.

## Don'ts

- No reutilizar capturas de pantalla para servicios no relacionados.
- No colocar la sección de inversión antes de haber demostrado el valor y los casos.
- No usar acentos morados genéricos ni gradientes saturados artificiales.
- No tocar los tokens ni la lógica de las rutas `/vip` y `/diabetes`.
