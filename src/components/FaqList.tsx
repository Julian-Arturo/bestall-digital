"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--line)]">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className="border-b border-[var(--line)] bg-white last:border-b-0"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left md:px-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-[1.35rem] font-bold leading-tight text-[var(--ink)] md:text-[1.55rem]">
                {item.q}
              </span>
              <span
                className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--orange-soft)] font-display text-xl font-bold text-[var(--orange-deep)]"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="m-0 max-w-[var(--measure)] px-4 pb-5 text-base leading-relaxed text-[var(--muted)] md:px-5">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
