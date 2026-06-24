export default function ProofSection() {
  return (
    <section id="proof" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven at Production Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven at production scale: live across 70+ diverse US healthcare organizations — hospitals, ASCs, physician groups, and clinics — processing real clinical work today.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-shadow p-8 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
            <p className="text-sm uppercase tracking-wider text-primary-600 font-semibold mb-2">
              Live Deployments
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              70+
            </h3>
            <p className="text-gray-600">
              Diverse US healthcare organizations — hospitals, ASCs, physician groups, clinics.
            </p>
          </div>

          <div className="card-shadow p-8 rounded-xl bg-gradient-to-br from-accent-50 to-white border border-accent-100">
            <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-2">
              Entity Types
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              4
            </h3>
            <p className="text-gray-600">
              Hospitals, ASCs, physician groups, clinics. Proven across diverse workflows.
            </p>
          </div>

          <div className="card-shadow p-8 rounded-xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
            <p className="text-sm uppercase tracking-wider text-primary-600 font-semibold mb-2">
              Real-World Proof
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              25yr+
            </h3>
            <p className="text-gray-600">
              Healthcare operator heritage. Built by people who know the industry inside out.
            </p>
          </div>
        </div>

        {/* Capacity Improvement */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            The Capacity Shift
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">Before AI Assist</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-gray-900">~15K lines/editor</p>
                <p className="text-sm text-gray-600">Baseline production</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">With MedScribeAI</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent-600">~30K lines/editor</p>
                <p className="text-sm text-gray-600">Up to 2x throughput potential</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-primary-200">
            * Illustrative figures. Actual results vary by specialty, client specs, and implementation.
          </p>
        </div>

        {/* Margin Improvement */}
        <div className="mt-12 p-8 md:p-12 rounded-2xl bg-white border-2 border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Margin Recovery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">Typical MTSO Today</p>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-gray-900">~15% EBITDA</p>
                <p className="text-sm text-gray-600">Constant hiring pressure, margin squeeze</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">With MedScribeAI</p>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary-600">~30% EBITDA</p>
                <p className="text-sm text-gray-600">Better utilization, same team size</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200">
            * Illustrative. Actual margins depend on pricing, costs, and client mix.
          </p>
        </div>
      </div>
    </section>
  );
}
