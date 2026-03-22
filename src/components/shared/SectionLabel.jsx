import React from "react";

export default function SectionLabel({ children }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
      {children}
    </span>
  );
}