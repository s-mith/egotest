import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })



export default function UserID() {

    const router = useRouter()
  return (
    <main
      className={``}
    >
    user: {router.query.id}
      
    </main>
  )
}
