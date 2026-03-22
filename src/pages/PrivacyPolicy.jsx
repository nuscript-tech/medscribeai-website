import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-brand-navy mb-2">Privacy Policy</h1>
          <p className="text-brand-text/80 mb-10">Last updated: March 2026</p>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-brand-navy prose-p:text-brand-text prose-p:leading-relaxed prose-li:text-brand-text">
            <h2 className="text-2xl mt-10 mb-4">1. Introduction</h2>
            <p>NuScript Technologies Pvt Ltd ("NuScript", "we", "us", or "our") operates the MedScribeAI platform (medscribeai.in and app.medscribeai.in). This Privacy Policy describes how we collect, use, store, and protect information when you use our services.</p>

            <h2 className="text-2xl mt-10 mb-4">2. Information We Collect</h2>
            <p><strong>Account Information:</strong> When you register for MedScribeAI, we collect your name, email address, phone number, company name, and role.</p>
            <p><strong>Usage Data:</strong> We collect information about how you interact with the platform, including transcription volumes, feature usage, login times, and performance metrics.</p>
            <p><strong>Medical Audio & Transcription Data:</strong> As a medical transcription platform, we process audio files and transcribed medical documents on behalf of our MTSO clients. This data is processed solely to provide the transcription service and is treated with the highest security standards.</p>
            <p><strong>Employee/HR Data:</strong> For HRMS features, we process employee information including attendance, leave records, compensation data, and payroll information as provided by the MTSO.</p>

            <h2 className="text-2xl mt-10 mb-4">3. How We Use Your Information</h2>
            <p>We use collected information to provide and improve the MedScribeAI platform, process medical transcriptions using our AI pipeline, manage workforce and HR functions as configured by the MTSO, generate analytics and reporting, communicate service updates and support, and comply with legal obligations.</p>

            <h2 className="text-2xl mt-10 mb-4">4. Data Security</h2>
            <p>We implement industry-standard security measures including encryption at rest and in transit (AES-256, TLS 1.3), role-based access controls, secure cloud infrastructure, regular security assessments, and audit logging of all data access.</p>

            <h2 className="text-2xl mt-10 mb-4">5. Data Storage & Retention</h2>
            <p>Data is stored on secure cloud infrastructure. Medical audio files and transcription data are retained as per the MTSO's configuration and applicable regulations. HR and payroll data is retained for the duration of the service agreement plus any legally required retention period.</p>

            <h2 className="text-2xl mt-10 mb-4">6. Third-Party Services</h2>
            <p>MedScribeAI uses third-party services for core functionality including speech-to-text processing, AI document formatting, cloud hosting, file storage, database management, and user authentication. Each provider maintains their own privacy policies and security certifications.</p>

            <h2 className="text-2xl mt-10 mb-4">7. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We share data only with third-party service providers necessary to operate the platform (as listed above), when required by law, regulation, or legal process, and with your MTSO organization as configured by the account administrator.</p>

            <h2 className="text-2xl mt-10 mb-4">8. Your Rights</h2>
            <p>You have the right to access your personal data, request correction of inaccurate data, request deletion of your data (subject to legal retention requirements), export your data in a portable format, and withdraw consent for optional data processing.</p>

            <h2 className="text-2xl mt-10 mb-4">9. Cookies</h2>
            <p>We use essential cookies for authentication and session management. We do not use tracking cookies for advertising purposes.</p>

            <h2 className="text-2xl mt-10 mb-4">10. Jurisdiction</h2>
            <p>This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.</p>

            <h2 className="text-2xl mt-10 mb-4">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify registered users of material changes via email or platform notification.</p>

            <h2 className="text-2xl mt-10 mb-4">12. Contact</h2>
            <p>For privacy-related inquiries, contact us at:</p>
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
