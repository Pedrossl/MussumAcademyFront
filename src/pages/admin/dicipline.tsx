import React from 'react';
import { useDeleteOneDiciplineMutation, useGetDisciplinesQuery } from '../../../graphql/generated';

import { useRouter } from 'next/router';

const Disciplines = () => {
  const { data } = useGetDisciplinesQuery();
  const [deleteOneDiscipline] = useDeleteOneDiciplineMutation();
  const router = useRouter();

  const deleteOne = async (id:string) => {
    await deleteOneDiscipline({
      variables: { input: { id:id } },
      refetchQueries: ['GetDisciplines'],
    });
  };

  const handleViewStudentsClick = () => {
    router.push('/admin/students');
  };

  return (
    <div className="bg-black min-h-screen py-6">
      <button onClick={handleViewStudentsClick} className="text-blue-400 underline mb-4 block m-auto hover:text-opacity-75 hover:text-blue-600">
        Ver Estudantes
      </button>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-10">Lista de Disciplinas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.diciplines?.nodes?.map((discipline) => (
            <div key={discipline.id} className="rounded-lg border border-purple-800 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">{discipline.name}</h2>
                <h3 className="text-lg font-semibold mb-2 text-white">Estudantes:</h3>
                {discipline.students?.nodes && discipline.students.nodes.length > 0 ? (
                  <ul className="text-white">
                    {discipline.students?.nodes?.map((student) => (
                      <li key={student.name}>{student.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white">Nenhum estudante</p>
                )}
              </div>
              <button
                onClick={() => deleteOne(discipline.id)}
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

export default Disciplines;
