import {useRouter} from "next/router"
const login = () => {
  const router = useRouter();
  const onLogin = (e) => {
    e.preventDefault()
    router.push("/dashboard")
  }
  return (
    <>
      <input placeholder="User Name"/>
      <input placeholder="Password" type="password" />
      <button onClick={onLogin} type="button">
        Log In
      </button>
    </>
  )
}

export default login
