export default function SolutionSection() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The MedScribeAI Platform
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two engines working together: one to process audio into AI-drafted notes, one to manage operations and grow your capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Production Engine */}
          <div className="space-y-6">
            <div className="inline-block badge badge-primary">
              Engine 1
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Production Engine
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Audio-to-code pipeline: Deepgram speech-to-text, Claude AI note generation, automated QA, and EHR/HL7-FHIR delivery ready.
            </p>
            <ul className="space-y-3">
              {[
                'Real-time audio processing',
                'AI-drafted clinical notes',
                'Automated quality checks',
                'EHR/claims-ready output',
                'HIPAA-compliant workflow',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-2 border-primary-200">
                <p className="text-sm font-semibold text-primary-700">📢 Audio Input</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="bg-white rounded-lg p-4 border-2 border-primary-200">
                <p className="text-sm font-semibold text-primary-700">🎙️ Speech-to-Text</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="bg-white rounded-lg p-4 border-2 border-accent-200">
                <p className="text-sm font-semibold text-accent-700">✨ AI Draft</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="bg-white rounded-lg p-4 border-2 border-primary-200">
                <p className="text-sm font-semibold text-primary-700">✅ QA Review</p>
              </div>
              <div className="text-center text-gray-400">↓</div>
              <div className="bg-white rounded-lg p-4 border-2 border-accent-200">
                <p className="text-sm font-semibold text-accent-700">📤 EHR-Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Suite */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border border-accent-100 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Team Mgmt', icon: '👥' },
                { label: 'TAT Tracking', icon: '⏱️' },
                { label: 'Quality Dash', icon: '📊' },
                { label: 'Multi-Client', icon: '🏥' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 text-center border border-accent-100"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs font-semibold text-gray-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Management Suite */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block badge badge-accent">
              Engine 2
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Management Suite
            </h3>
            <p className="text-gray-600 leading-relaxed">
              HRMS, productivity dashboards, TAT monitoring, quality assurance tools, and multi-client management all in one place.
            </p>
            <ul className="space-y-3">
              {[
                'Productivity tracking per team member',
                'TAT and quality dashboards',
                'Compensation & payroll integration',
                'Multi-client job routing',
                'Compliance & audit logs',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
