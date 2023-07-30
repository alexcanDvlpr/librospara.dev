import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center from-tsBlue-100 to-tsBlue-200">
      <header>
        <h1 className="text-center font-extrabold text-transparent text-5xl sm:text-8xl bg-clip-text bg-gradient-to-r from-tsWhite-100 to-tsWhite-200" style={{ "view-transition-name": "title" }}>#librosParaDevs</h1>
        <h2 className="text-center font-semibold text-sm sm:text-xl from-tsWhite-100 to-tsWhite-200">Tus libros de programación de cualquier nivel.</h2>
        <div className="w-full flex flex-row justify-center items-center gap-5 my-10">
          <Link href="/books" className="btn btn-primary">Ver libros</Link>
          <Link href="mailto:librosparadevs@gmail.com?subject=Propuesta librospara.dev" className="btn btn-secondary">Propuestas</Link>
        </div>
      </header>
    </main>
  )
}
