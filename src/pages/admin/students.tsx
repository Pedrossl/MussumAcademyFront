import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery, gql, useLazyQuery } from '@apollo/client';

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
  const [fetch, { data }] = useLazyQuery(GET_STUDENTS);
  console.log('data', data);
  
  return (

   <div >
    <h1>Students</h1>
    <Link href="/">Home</Link>
    <h2 onClick={() => fetch()}>Fetch</h2>

   </div>
  )
}
