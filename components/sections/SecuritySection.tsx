export default function SecuritySection() {
  const securityPoints = [
    {
      title: 'HIPAA-Compliant',
      description: 'Full HIPAA compliance with Business Associate Agreements (BAA) included.',
    },
    {
      title: 'Data Isolation',
      description: 'Tenant data is logically and physically isolated. Your data stays yours.',
    },
    {
      title: 'Encryption',
      description: 'End-to-end encryption in transit and at rest using industry-standard TLS 1.3.',
    },
    {
      title: 'Access Controls',
      description: 'Role-based access control (RBAC) with audit logging on all operations.',
    },
    {
      title: 'Regular Audits',
      description: 'Continuous security monitoring, vulnerability scanning, and annual assessments.',
    },
    {
      title: 'Secure Infrastructure',
      description: 'Built on Cloudflare and AWS with DDoS protection and redundancy.',
    },
  ];

  return (
    <section id="security" className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise Security Built In
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Healthcare data requires trust. MedScribeAI is architected for HIPAA compliance, data privacy, and security at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {securityPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-300 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Compliance Statement */}
        <div className="bg-gray-800/60 rounded-xl p-8 border border-gray-700">
          <h3 className="text-xl font-bold mb-4">Compliance & Standards</h3>
          <p className="text-gray-300 mb-6">
            We meet and exceed healthcare industry standards:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-white mb-2">HIPAA</p>
              <p className="text-sm text-gray-400">
                Full compliance with BAA for healthcare organizations
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Data Residency</p>
              <p className="text-sm text-gray-400">
                US-only data centers with no international transfers
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Audit Ready</p>
              <p className="text-sm text-gray-400">
                Complete audit logs and compliance documentation
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 mb-4">
            Need detailed security documentation or a compliance review?
          </p>
          <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Request Security Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
