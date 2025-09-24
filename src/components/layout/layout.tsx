import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./footer"

export function Layout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-[-18rem] z-[-10] h-[32rem] bg-[radial-gradient(60%_80%_at_50%_30%,rgba(99,102,241,0.16),transparent)]" />
      <Header />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}