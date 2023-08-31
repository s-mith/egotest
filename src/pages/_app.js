
import LoginButton from '../../components/login'
import { SessionProvider } from "next-auth/react"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <LoginButton />
      <Component {...pageProps} />
    </SessionProvider>
  )
}