import { MetaTags } from '@/components/seo/meta-tags'

export function PrivacyPage() {
  return (
    <>
      <MetaTags
        title="Privacy Policy | Market Research Hub"
        description="Learn about our privacy policy and how we protect your personal information when using our market research platform."
        keywords={["privacy policy", "data protection", "personal information", "GDPR"]}
        ogTitle="Privacy Policy | Market Research Hub"
        ogDescription="Our commitment to protecting your privacy and personal data"
        ogType="website"
        canonical={window.location.href}
      />

      <div className="container py-8 max-w-4xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground mt-2">
              Last updated: March 23, 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              Market Research Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact forms</li>
              <li>Participate in surveys or feedback</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>We automatically collect certain information when you visit our website, including:</p>
            <ul>
              <li>IP address and browser information</li>
              <li>Device and operating system information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Search terms used to find our site</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns and improve our services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@marketresearchhub.com</li>
              <li>Address: [Your Business Address]</li>
              <li>Phone: [Your Phone Number]</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}