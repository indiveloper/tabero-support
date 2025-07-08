import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Tabero</h1>
          <p className="text-2xl text-gray-800 font-medium mb-8">Breaking down language barriers, one menu at a time</p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://apps.apple.com/kr/app/tabero/id6747633515"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on App Store
            </Link>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Snap</h3>
              <p className="text-gray-700 font-medium">Take a photo of any menu</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Translate</h3>
              <p className="text-gray-700 font-medium">AI processes and translates in seconds</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Order</h3>
              <p className="text-gray-700 font-medium">Show translated requirements to staff</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">⚡ Instant Translation</h3>
              <p className="text-gray-700">Typically processes in seconds</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">🌏 26 Language Support</h3>
              <p className="text-gray-700">Major languages across Asia, Europe, and Americas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">🍽️ Smart Categorization</h3>
              <p className="text-gray-700">Automatically organizes items into appetizers, mains, desserts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">🥗 Dietary Preferences</h3>
              <p className="text-gray-700">Save and translate your allergies and dietary restrictions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">📱 Multi-Photo Support</h3>
              <p className="text-gray-700">Translate multiple menu pages at once</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-900">📝 Order History</h3>
              <p className="text-gray-700">Keep track of your favorite dishes from around the world</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supported Languages</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Asian Languages</h3>
                <p className="text-gray-700">Korean, Japanese, Chinese (Simplified/Traditional), Thai, Vietnamese, Indonesian, Malay, Filipino</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">European Languages</h3>
                <p className="text-gray-700">English, Spanish, French, German, Italian, Portuguese, Russian, Dutch, Polish, Swedish, Finnish, Turkish, Ukrainian</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Middle Eastern</h3>
                <p className="text-gray-700">Arabic, Hebrew</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Indian Subcontinent</h3>
                <p className="text-gray-700">Hindi, Bengali</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Frequent travelers, food enthusiasts exploring local cuisines, people with dietary restrictions or allergies, 
            and anyone wanting to order confidently abroad.
          </p>
        </section>

        <section className="mb-16">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Important Notice</h3>
            <p className="text-amber-800">
              Translations are AI-generated and may not be 100% accurate. For severe allergies or critical dietary restrictions, 
              always verify with restaurant staff. Tabero is a translation aid and should not be your sole source of information 
              for health-critical decisions.
            </p>
          </div>
        </section>

        <footer className="border-t pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-700">
              © 2025 Tabero. All rights reserved.
            </div>
            <nav className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/support" className="text-gray-700 hover:text-gray-900">
                Support
              </Link>
              <a href="mailto:indiveloper@gmail.com" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
          <p className="text-center text-gray-500 mt-8">
            Travel. Eat. Enjoy. Without language barriers.
          </p>
        </footer>
      </div>
    </main>
  );
}