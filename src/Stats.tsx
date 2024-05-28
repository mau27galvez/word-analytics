export default function Stats({
  wordsCount,
  charactersCount
}: { wordsCount: number, charactersCount: number }) {
  return (
    <section className="stats">
      <Stat number={wordsCount} heading="Words" />
      <Stat number={charactersCount} heading="Characters" />
      <Stat number={280 - charactersCount} heading="Instagram" />
      <Stat number={2200 - charactersCount} heading="Facebook" />
    </section>
  )
}

function Stat({ number, heading }: { number: number, heading: string }) {
  return (
    <section className="stat">
      <span className={`stat_number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
