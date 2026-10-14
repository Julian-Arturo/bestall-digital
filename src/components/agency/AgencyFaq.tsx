"use client";

import { useState } from "react";
import { FAQS } from "@/lib/agency";

export function AgencyFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bd-faq max-w-3xl mx-auto flex flex-col gap-3 w-full">
      {FAQS.map((item, i) => {
        const open = openFaq === i;
        return (
          <div key={item.q} className={`bd-faq-item w-full max-w-full overflow-hidden${open ? " is-open" : ""}`}>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenFaq(open ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
            >
              <span className="text-sm sm:text-base pr-2">{item.q}</span>
              <i aria-hidden="true">{open ? "−" : "+"}</i>
            </button>
            {open ? <p className="text-xs sm:text-sm">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
