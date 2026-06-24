export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Double Your Capacity?
          </h2>

          <p className="text-lg md:text-xl text-white/90">
            Start your 14-day free pilot today. Full access. No credit card required. See the capacity shift firsthand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Start Free Pilot
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Schedule a Demo
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 mt-8">
            <p className="text-sm text-white/80 mb-4">Questions? Get in touch:</p>
            <div className="space-y-2 text-white">
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:marketing@nuscript.ai"
                  className="hover:underline"
                >
                  marketing@nuscript.ai
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+919790444927" className="hover:underline">
                  +91 97904 44927
                </a>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/80 mb-4">Trusted by healthcare organizations across the US</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              <span>✓ HIPAA Compliant</span>
              <span>✓ Proven at Scale</span>
              <span>✓ 25+ Years Healthcare Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
