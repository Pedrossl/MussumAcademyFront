import { Inter } from 'next/font/google'
import Link from 'next/link'
import './styles.css';
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
   <div >
  <h1>home</h1>
  <Link href="/admin/students">To students</Link>
  <h2 onClick={() => router.push('/admin/students')}>Ir students(router)</h2>
   </div>
  )
}
