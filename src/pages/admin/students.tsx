
import { useCreateOneStudentMutation, useDeleteOneStudentMutation, useGetStudentsQuery } from "../../../graphql/generated"
import { useRouter } from "next/router";


export default function Students() {
  const {data} = useGetStudentsQuery()
  const router = useRouter()
  console.log('data', data);
  const [deleteOneStudent] = useDeleteOneStudentMutation()
  const[createOneStudent] = useCreateOneStudentMutation()

  async function deleteOne(id: string) {
    await deleteOneStudent({
      variables: {input:{ id: id},},
      refetchQueries: ['GetStudents'],
    })
  }

    const handleViewDiciplinesClick = () => {
    router.push('/admin/dicipline');  
  };

  return (
    
    <div className="bg-black min-h-screen py-6">
              <button onClick={handleViewDiciplinesClick} className="text-blue-400 m-auto underline mb-4 block hover:text-opacity-75 hover:text-blue-600">
          Ver Disciplinas
        </button>
      <div className="container mx-auto text-center"> 
        <h1 className="text-3xl font-bold text-white mb-10">Lista de Estudantes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.students?.nodes?.map((student) => (
            <div key={student.id} className="rounded-lg border border-purple-800 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">{student.name}</h2>
                <p className="text-gray-400">ID: {student.key}</p>
              </div>
              <button
                onClick={() => deleteOne(student.id)}
                className="block w-full py-2 bg-red-900 hover:bg-red-700 text-white text-center"
              >
                Deletar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
   
