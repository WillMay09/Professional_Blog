export default function ComingSoon() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 my-12">
        <p className="text-lg text-blue-900 mb-2">🚧 Coming Soon</p>
        <p className="text-blue-700">
          This page is currently under construction. Check back in March!
        </p>
      </div>
      <a href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </a>
    </div>
  );
}
