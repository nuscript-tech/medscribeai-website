export default function ProblemSection() {
  const problems = [
    {
      icon: '📉',
      title: 'Margin Pressure',
      description: 'Healthcare client expectations and operational costs squeeze profitability year after year.',
    },
    {
      icon: '👥',
      title: 'Hiring Treadmill',
      description: 'Constant recruitment, training, and turnover consume resources without lasting ROI.',
    },
    {
      icon: '⏱️',
      title: 'TAT Demands',
      description: 'Clients expect faster turnaround times. Meeting them means more staff or burnout.',
    },
    {
      icon: '📋',
      title: 'Quality Variability',
      description: 'Human-only workflows create inconsistency. QA becomes a bottleneck, not a guarantee.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Squeeze MTSOs Face
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Healthcare transcription is under pressure. Margins compress, hiring never stops, and clients demand faster turnaround. You need capacity without complexity. MedScribeAI — the AI platform for medical transcription operations — is proven at production scale: live across 70+ diverse US healthcare organizations — hospitals, ASCs, physician groups, and clinics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="card-shadow p-8 rounded-xl border border-gray-100 hover:border-primary-200 transition-all"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-lg text-gray-900 font-semibold mb-4">
            There's a better way.
          </p>
          <p className="text-gray-600">
            What if you could grow without hiring? Process more clinical work with the same team?
          </p>
        </div>
      </div>
    </section>
  );
}
