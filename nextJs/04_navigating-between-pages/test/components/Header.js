import Link from 'next/link'

const Header = () => {
  return (
    <>
      <ul>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </ul>
      <ul>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </ul>
      <ul>
        <Link href='/login'>
          <a>Login</a>
        </Link>
      </ul>
    </>
  )
}

export default Header
