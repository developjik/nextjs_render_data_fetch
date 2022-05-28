import Link from 'next/link'

export default function Home() {
  return (
    <nav
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Link href="/get-static-paths/1">
        <a>get static paths</a>
      </Link>
      <Link href="/get-static-props">
        <a>get static props</a>
      </Link>
      <Link href="/get-serverside-props">
        <a>get serverside props</a>
      </Link>
      <Link href="/csr">
        <a>client side render</a>
      </Link>
    </nav>
  )
}
