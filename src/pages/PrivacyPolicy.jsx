import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-20 lg:pt-44">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: March 2026</p>

        <div className="prose max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-primary [&_a]:hover:underline">
          <h2>1. Introduction</h2>
          <p>NuScript Technologies Private Limited ("NuScript", "we", "us", or "our") operates the MedScribeAI platform (medscribeai.in and app.medscribeai.in). This Privacy Policy describes how we collect, use, store, and protect information when you use our services.</p>

          <h2>2. Information We Collect</h2>
          <p><strong className="text-foreground">Account Information:</strong> When you register for MedScribeAI, we collect your name, email address, phone number, company name, and role.</p>
          <p><strong className="text-foreground">Usage Data:</strong> We collect information about how you interact with the platform, including transcription volumes, feature usage, login times, and performance metrics.</p>
          <p><strong className="text-foreground">Medical Audio & Transcription Data:</strong> As a medical transcription platform, we process audio files and transcribed medical documents on behalf of our MTSO clients. This data is processed solely to provide the transcription service and is treated with the highest security standards.</p>
          <p><strong className="text-foreground">Employee/HR Data:</strong> For HRMS features, we process employee information including attendance, leave records, compensation data, and payroll information as provided by the MTSO.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to provide and improve the MedScribeAI platform, process medical transcriptions using our AI pipeline, manage workforce and HR functions as configured by the MTSO, generate analytics and reporting, communicate service updates and support, and comply with legal obligations.</p>

          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures including encryption at rest and in transit (AES-256, TLS 1.3), role-based access controls, secure cloud infrastructure, regular security assessments, and audit logging of all data access.</p>

          <h2>5. Data Storage & Retention</h2>
          <p>Data is stored on secure cloud infrastructure. Medical audio files and transcription data are retained as per the MTSO's configuration and applicable regulations. HR and payroll data is retained for the duration of the service agreement plus any legally required retention period.</p>

          <h2>6. Third-Party Services</h2>
          <p>MedScribeAI uses third-party services for core functionality including speech-to-text processing, AI document formatting, cloud hosting, file storage, database management, and user authentication. Each provider maintains their own privacy policies and security certifications.</p>

          <h2>7. Data Sharing</h2>
          <p>We do not sell, rent, or trade your personal information. We share data only with third-party service providers necessary to operate the platform, when required by law, regulation, or legal process, and with your MTSO organization as configured by the account administrator.</p>

          <h2>8. Your Rights</h2>
          <p>You have the right to access your personal data, request correction of inaccurate data, request deletion of your data (subject to legal retention requirements), export your data in a portable format, and withdraw consent for optional data processing.</p>

          <h2>9. Cookies</h2>
          <p>We use essential cookies for authentication and session management. We do not use tracking cookies for advertising purposes.</p>

          <h2>10. Jurisdiction</h2>
          <p>This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu, India.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify registered users of material changes via email or platform notification.</p>

          <h2>12. Contact</h2>
          <p>
            <strong className="text-foreground">NuScript Technologies Private Limited</strong><br/>
            Coimbatore, Tamil Nadu, India<br/>
            Email: <a href="mailto:hello@medscribeai.in">hello@medscribeai.in</a>
          </p>
        </div>
      </div>
    </section>
  );
}
