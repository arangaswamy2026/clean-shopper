function WelcomePage() {
  return (
    <main className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
        Clean Shopper
      </span>
      <h1 className="text-4xl sm:text-5xl font-semibold text-emerald-950 tracking-tight">
        Welcome to Clean Shopper
      </h1>
      <p className="mt-4 max-w-xl text-lg text-emerald-800/80">
        Research home and personal care products, get clean/not-clean assessments backed by
        ingredient safety data, and build a shopping list you can trust.
      </p>
      <button
        type="button"
        className="mt-8 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors"
      >
        Get Started
      </button>
    </main>
  )
}

export default WelcomePage
