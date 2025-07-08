export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tabero Privacy Policy</h1>
        
        <p className="text-gray-600 mb-8">
          <strong>Effective Date: June 22, 2025</strong>
        </p>

        <p className="text-gray-700 mb-8">
          Tabero (hereinafter &quot;Company&quot;) values your personal information and complies with relevant laws and regulations. 
          This privacy policy has been prepared in accordance with Apple&apos;s privacy guidelines.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Types of Data We Collect</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1 Identifiers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>User ID</strong>: UUID (Universally Unique Identifier)
                <ul className="list-disc pl-5 mt-1">
                  <li>Purpose: Providing personalized services and app functionality</li>
                  <li>Not linked to user</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2 Usage Data</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Product Interactions</strong>: In-app taps, feature usage frequency
                <ul className="list-disc pl-5 mt-1">
                  <li>Purpose: App performance improvement and user experience enhancement</li>
                  <li>Not linked to user</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1.3 Diagnostics</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Crash Data</strong>: Technical information generated during app crashes</li>
              <li><strong>Performance Data</strong>: App loading time, translation processing time
                <ul className="list-disc pl-5 mt-1">
                  <li>Purpose: App stability improvement</li>
                  <li>Not linked to user</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1.4 Other Data</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>App Settings</strong>: Selected nationality, travel country, language settings</li>
              <li><strong>Request Count</strong>: Translation service usage count (request_count)
                <ul className="list-disc pl-5 mt-1">
                  <li>Purpose: Service limit management and usage statistics</li>
                  <li>Linked to user (UUID based)</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Do Not Collect</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Information explicitly not collected:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Contact Information</strong>: Name, email, phone number</li>
            <li><strong>Health & Fitness</strong>: Health-related data</li>
            <li><strong>Financial Information</strong>: Payment information, credit card details</li>
            <li><strong>Location</strong>: Precise location, coarse location</li>
            <li><strong>Sensitive Information</strong>: Race, religion, sexual orientation, etc.</li>
            <li><strong>Contacts</strong>: Address book, contact lists</li>
            <li><strong>User Content</strong>: Photos, videos (deleted immediately after translation)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Data</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 App Functionality</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Providing menu translation services</li>
              <li>Saving and applying user settings</li>
              <li>Managing translation history (stored locally)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Analytics</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Anonymized usage statistics analysis</li>
              <li>Data analysis for service improvement</li>
              <li>All analytics data is not linked to users</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Third-Party Advertising</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ad display through Google AdMob</li>
              <li>Use of advertising identifier (IDFA)</li>
              <li>Personalized ads may be displayed</li>
              <li>Users can limit ad tracking in device settings</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Data Storage Locations</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Server</strong>: Supabase cloud (only UUID and usage count stored)</li>
              <li><strong>Local</strong>: User device (settings, translation history)</li>
              <li><strong>Temporary Processing</strong>: Menu photos (during translation only, immediately deleted)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Security Measures</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>All server communications are HTTPS encrypted</li>
              <li>Local data is securely stored within iOS sandbox</li>
              <li>Minimal data collection</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Data Access and Modification</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>View all personal data in app settings</li>
              <li>Change settings at any time</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Data Deletion</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>All local data is automatically deleted when app is uninstalled</li>
              <li>Server data deletion request: indiveloper@gmail.com (processed within 30 days)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.3 Data Portability</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Translation history export feature may be available in future updates</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 Google Gemini AI</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Purpose: Menu image translation</li>
              <li>Shared data: Menu photos (temporary)</li>
              <li>No personal information included</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2 Google AdMob</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Purpose: Ad display</li>
              <li>Shared data: Advertising identifier</li>
              <li>AdMob privacy policy applies</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.3 Firebase</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Purpose: App performance monitoring, crash reports</li>
              <li>Shared data: Device information, crash logs</li>
              <li>Firebase privacy policy applies</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention Period</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>UUID and usage information</strong>: 1 year after last use</li>
            <li><strong>Local data</strong>: Until app deletion</li>
            <li><strong>Temporary data</strong>: Immediately deleted after processing</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
          <p className="text-gray-700">We do not intentionally collect children&apos;s personal information.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy Policy Changes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Changes will be announced in app and update notes</li>
            <li>Major changes will require consent on app launch</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-2"><strong>Privacy Inquiries</strong></p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Email: indiveloper@gmail.com</li>
            <li>We aim to respond within 3-5 business days</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Additional Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">11.1 Cookie Usage</h3>
            <p className="text-gray-700">This app does not use cookies</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">11.2 Location Information</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Only reads SIM card country information (for initial setup)</li>
              <li>GPS location is not collected</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">11.3 Camera and Photos</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Camera: For menu photography</li>
              <li>Photo Library: For selecting saved menu photos</li>
              <li>Selected/captured photos are immediately deleted from server after translation</li>
            </ul>
          </div>
        </section>

        <div className="border-t pt-8 mt-12">
          <p className="text-gray-700 mb-4">
            This privacy policy is effective as of June 22, 2025.
          </p>
          <p className="text-gray-700">
            Tabero collects minimal user personal information and is committed to protecting it securely.
          </p>
        </div>
      </div>
    </main>
  );
}