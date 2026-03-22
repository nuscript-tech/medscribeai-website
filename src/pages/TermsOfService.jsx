import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Terms of Service</h1>
          <p className="text-brand-text/80 mb-10">Last updated: March 2026</p>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-brand-navy prose-p:text-brand-text prose-p:leading-relaxed prose-li:text-brand-text">
            <h2 className="text-2xl mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the MedScribeAI platform ("Service") provided by NuScript Technologies Pvt Ltd ("NuScript", "we", "us"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization (such as an MTSO), you represent that you have authority to bind that organization to these terms.</p>

            <h2 className="text-2xl mt-10 mb-4">2. Service Description</h2>
            <p>MedScribeAI is a cloud-based SaaS platform providing AI-powered medical transcription, quality assurance workflow management, and human resources management services for Medical Transcription Service Organizations (MTSOs). The platform includes AI transcription capabilities (speech-to-text and AI formatting), quality assurance workflow tools, workforce management and HRMS features, reporting and analytics, and template and macro management.</p>

            <h2 className="text-2xl mt-10 mb-4">3. Account Registration</h2>
            <p>To use MedScribeAI, you must register for an account, provide accurate and complete information, maintain the security of your account credentials, notify us immediately of any unauthorized access, and accept responsibility for all activity under your account. We reserve the right to suspend or terminate accounts that violate these terms.</p>

            <h2 className="text-2xl mt-10 mb-4">4. Subscription & Payment</h2>
            <p>MedScribeAI operates on a hybrid pricing model consisting of a monthly base fee and a per-line processing fee. Specific pricing is as agreed in your service agreement. Payments are due monthly unless otherwise specified. We may adjust pricing with 30 days' written notice. Pilot program terms (free period, discounted period) are as specified in individual agreements.</p>

            <h2 className="text-2xl mt-10 mb-4">5. Data Ownership & Processing</h2>
            <p>You retain ownership of all data you upload to or create within MedScribeAI, including medical audio files, transcription content, employee records, and organizational data. We process your data solely to provide the Service. We do not use your medical transcription data to train AI models without explicit consent. Upon termination, you may export your data within 30 days.</p>

            <h2 className="text-2xl mt-10 mb-4">6. Acceptable Use</h2>
            <p>You agree not to use the Service to violate any applicable law or regulation, process data for which you do not have proper authorization, attempt to reverse-engineer, decompile, or disassemble any part of the platform, share account credentials with unauthorized parties, interfere with or disrupt the Service or its infrastructure, or use the Service for any purpose other than medical transcription and related MTSO operations.</p>

            <h2 className="text-2xl mt-10 mb-4">7. Service Level</h2>
            <p>We strive to maintain 99.9% uptime for the MedScribeAI platform. Scheduled maintenance will be communicated in advance. We are not liable for downtime due to factors beyond our reasonable control, including internet outages, third-party service failures, or force majeure events.</p>

            <h2 className="text-2xl mt-10 mb-4">8. AI-Generated Content</h2>
            <p>MedScribeAI uses AI to generate draft transcriptions. These drafts are intended to assist Clinical Documentation Editors (CDEs) and are not a substitute for human review. The MTSO and its staff are responsible for reviewing and approving all AI-generated content before delivery to healthcare clients. NuScript is not liable for errors in final transcriptions that were approved by MTSO staff.</p>

            <h2 className="text-2xl mt-10 mb-4">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, NuScript's total liability under these terms shall not exceed the fees paid by you in the twelve (12) months preceding the claim. NuScript shall not be liable for indirect, incidental, special, consequential, or punitive damages.</p>

            <h2 className="text-2xl mt-10 mb-4">10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless NuScript from any claims, damages, or expenses arising from your use of the Service, your violation of these terms, or your violation of any third-party rights.</p>

            <h2 className="text-2xl mt-10 mb-4">11. Termination</h2>
            <p>Either party may terminate the service agreement with 30 days' written notice. We may suspend or terminate access immediately if you violate these terms. Upon termination, your access will be revoked and data retention policies as described in our Privacy Policy will apply.</p>

            <h2 className="text-2xl mt-10 mb-4">12. Modifications</h2>
            <p>We reserve the right to modify these Terms of Service. Material changes will be communicated via email or platform notification at least 30 days before taking effect. Continued use of the Service after changes take effect constitutes acceptance of the modified terms.</p>

            <h2 className="text-2xl mt-10 mb-4">13. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.</p>

            <h2 className="text-2xl mt-10 mb-4">14. Contact</h2>
            <p>For questions about these Terms of Service, contact us at:</p>
            <p>
              <strong>NuScript Technologies Pvt Ltd</strong><br/>
              Coimbatore, Tamil Nadu, India<br/>
              Email: <a href="mailto:hello@medscribeai.in" className="text-brand hover:underline">hello@medscribeai.in</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
