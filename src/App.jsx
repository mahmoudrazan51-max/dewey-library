function App() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#2F2A26]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">
            Dewey Library
          </h1>

          <p className="text-sm text-[#766F68]">
            My reading space
          </p>
        </header>

        <section className="mt-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A8178]">
            Welcome back
          </p>

          <h2 className="mt-3 max-w-2xl text-5xl font-semibold leading-tight">
            Keep track of what you read.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#766F68]">
            Your personal library for books you are reading, have finished,
            and want to read.
          </p>
        </section>

        <section className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#8A8178]">Currently reading</p>
            <p className="mt-3 text-3xl font-semibold">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#8A8178]">Finished</p>
            <p className="mt-3 text-3xl font-semibold">0</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#8A8178]">Want to read</p>
            <p className="mt-3 text-3xl font-semibold">0</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
