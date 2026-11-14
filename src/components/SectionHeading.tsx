import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  note?: string;
}

export default function SectionHeading({ eyebrow, title, note }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {note && <p>{note}</p>}
      </div>
    </Reveal>
  );
}
