export default function HeroSection() {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block badge badge-primary">
              AI Platform for Medical Transcription
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Double Your Capacity.{' '}
              <span className="text-gradient">Zero New Hires.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              The AI platform for medical transcription operations. Process audio directly into EHR-ready notes, proven at production scale across 70+ diverse US healthcare organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">
                Start Free 14-Day Pilot
              </button>
              <button className="btn-outline">
                Watch Demo
              </button>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              ✓ HIPAA-compliant · ✓ No credit card required · ✓ 14-day full access
            </p>
          </div>

          {/* Visual */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="h-3 bg-gray-200 rounded-full w-3/4" />
                <div className="h-3 bg-gray-200 rounded-full w-full" />
                <div className="h-3 bg-gray-200 rounded-full w-5/6" />
                <div className="pt-4 border-t border-gray-200">
                  <div className="h-10 bg-primary-100 rounded text-sm text-primary-700 flex items-center px-4 font-medium">
                    ✓ Audio processing complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-200">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary-600">70+</p>
            <p className="text-sm text-gray-600 mt-1">US Healthcare Orgs</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-accent-600">4</p>
            <p className="text-sm text-gray-600 mt-1">Entity Types</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary-600">25yr+</p>
            <p className="text-sm text-gray-600 mt-1">Healthcare Heritage</p>
          </div>
          <div className="hidden md:block">
            <p className="text-2xl md:text-3xl font-bold text-accent-600">∞</p>
            <p className="text-sm text-gray-600 mt-1">Capacity Potential</p>
          </div>
        </div>
      </div>
    </section>
  );
}
