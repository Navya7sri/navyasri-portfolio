import Reveal from './Reveal';
export default function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <Reveal className="section-heading"><span className="eyebrow">{eyebrow}</span><div className="section-heading-row"><h2>{title}</h2>{note && <p>{note}</p>}</div></Reveal>;
}
