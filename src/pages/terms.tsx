import { MetaTags } from '@/components/seo/meta-tags'

export function TermsPage() {
  return (
    <>
      <MetaTags
        title="Terms of Service | Market Research Hub"
        description="Read our terms of service and understand the conditions for using our market research platform and services."
        keywords={["terms of service", "terms and conditions", "user agreement", "legal"]}
        ogTitle="Terms of Service | Market Research Hub"
        ogDescription="Terms and conditions for using our market research services"
        ogType="website"
        canonical={window.location.href}
      />

      <div className="container py-8 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-muted-foreground mt-2">
              Last updated: March 23, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Market Research Hub ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your access to and use of our website, services, and resources.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Market Research Hub provides market research reports, industry analysis, business intelligence, and related content. All research reports and data are provided free of charge for educational and informational purposes.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              Some features of our Service may require you to create an account. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and up-to-date information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h2>4. Acceptable Use</h2>
            <p>You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Transmit any harmful, offensive, or objectionable content</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Impersonate others or provide false information</li>
              <li>Engage in any commercial use without explicit permission</li>
            </ul>

            <h2>5. Content and Intellectual Property</h2>
            <h3>Our Content</h3>
            <p>
              All content, including research reports, analysis, text, graphics, logos, and software, is the property of Market Research Hub or our content suppliers and is protected by copyright and other intellectual property laws.
            </p>

            <h3>License to Use</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal, educational, and non-commercial purposes. This license does not include:
            </p>
            <ul>
              <li>Resale or commercial use of our content</li>
              <li>Making derivative works</li>
              <li>Removing copyright or proprietary notices</li>
            </ul>

            <h3>User-Generated Content</h3>
            <p>
              If you submit content to our Service (comments, feedback, etc.), you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and distribute such content in connection with our Service.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information when you use our Service.
            </p>

            <h2>7. Disclaimers</h2>
            <h3>No Warranties</h3>
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3>Research Content</h3>
            <p>
              Our research reports and analysis are for informational purposes only and should not be considered as:
            </p>
            <ul>
              <li>Investment advice or recommendations</li>
              <li>Professional consulting or advisory services</li>
              <li>Guarantees of accuracy or completeness</li>
              <li>Predictions of future market performance</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Market Research Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Market Research Hub, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the Service at any time, with or without cause, and with or without notice. Upon termination, your right to use the Service will cease immediately.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting a notice on our website or sending an email notification. Continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of [Your Jurisdiction].
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>

            <h2>14. Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Market Research Hub regarding the use of the Service and supersede all prior agreements and understandings.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@marketresearchhub.com</li>
              <li>Address: [Your Business Address]</li>
              <li>Phone: [Your Phone Number]</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}