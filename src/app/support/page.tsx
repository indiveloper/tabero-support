export default function Support() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tabero Support</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How accurate are the translations?
              </h3>
              <p className="text-gray-700">
                Tabero uses AI technology to provide menu translations. Please note that translations are 
                AI-generated and should not be considered 100% accurate. For critical dietary restrictions or severe allergies, 
                always verify with restaurant staff. Tabero is a translation aid and should not be your sole source of information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you store my photos?
              </h3>
              <p className="text-gray-700">
                No, we do not store your photos on our servers. Menu photos are processed for translation only 
                and are immediately discarded after processing. Your privacy is our priority.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Which languages are supported?
              </h3>
              <p className="text-gray-700">
                Tabero supports 26 major languages including Korean, Japanese, Chinese, English, Spanish, French, 
                German, and many more. The full list is available on our main page.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do I save my dietary preferences?
              </h3>
              <p className="text-gray-700">
                You can save your dietary preferences and allergies in the app settings. These will be automatically 
                translated into the local language when you use the app.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Does the app work offline?
              </h3>
              <p className="text-gray-700">
                Tabero requires an internet connection to process translations using our AI service. However, 
                your translation history is stored locally and can be accessed offline.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I report a bug or suggest a feature?
              </h3>
              <p className="text-gray-700">
                Please email us at indiveloper@gmail.com with your feedback. We appreciate all bug reports 
                and feature suggestions from our users.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Having issues or suggestions? We&apos;d love to hear from you!
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:indiveloper@gmail.com" className="text-blue-600 hover:underline">indiveloper@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Response time:</strong> We typically respond within 3-5 business days
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips for Best Results</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Take clear photos with good lighting</li>
              <li>Ensure the entire menu section is visible in the photo</li>
              <li>For best results, avoid blurry or angled photos</li>
              <li>You can take multiple photos for long menus</li>
              <li>Use the dietary preferences feature to save time</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Tabero</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Tabero is an AI-powered menu translation app designed for travelers. Our mission is to break down 
              language barriers and help people enjoy local cuisines with confidence.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you&apos;re a frequent traveler, food enthusiast, or someone with dietary restrictions, 
              Tabero makes ordering food abroad simple and stress-free.
            </p>
            <p className="text-gray-700 font-semibold">
              Travel. Eat. Enjoy. Without language barriers.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}