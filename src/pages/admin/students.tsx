import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, gql } from '@apollo/client';

export default function Home() {
    const router = useRouter()
    const GET_STUDENTS = gql`
    query GetStudents {
      students {
        nodes {
          id
          key
          name
        }
      }
    }
  `;
  const {data, loading, error, refetch } = useQuery(GET_STUDENTS);
  console.log('data', data);
  
  return (

   <div >
    <h1>Students</h1>
    <Link href="/">Home</Link>
    <h2 onClick={() => router.push('/')}>Voltar Home(router)</h2>

   </div>
  )
}
