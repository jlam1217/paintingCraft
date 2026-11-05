const NAMES = [
  'Rosemary Needham',
  'Sarah Johnson',
  'Emily Rodriguez',
  'Michael Chen',
]

const GUARANTEES = [
  { year: '2024', job: 'Rosemary Needham interior', note: 'Five-star review' },
  { year: '2023', job: 'Harbor View exterior', note: 'Licensed and insured' },
  { year: '2022', job: 'Maple Street kitchen', note: 'Two-year warranty' },
]

export function ProofBand() {
  return (
    <section className="proof" aria-labelledby="proof-title">
      <h2 id="proof-title" className="sr-only">
        Clients and guarantees
      </h2>

      <div className="band">
        <div className="band__track">
          {[...NAMES, ...NAMES].map((name, i) => (
            <span key={i} className="band__name">
              {name}
              <span className="band__dot"> ·</span>
            </span>
          ))}
        </div>
      </div>

      <p className="band__note">
        The names behind 200+ five-star reviews. Licensed, insured, two-year warranty on every
        job.
      </p>

      <div className="guarantees">
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Project</th>
              <th scope="col">Guarantee</th>
            </tr>
          </thead>
          <tbody>
            {GUARANTEES.map((g) => (
              <tr key={g.year + g.job}>
                <td>{g.year}</td>
                <td>{g.job}</td>
                <td>{g.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
