import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service'; // Importa a função de busca
import Categoria from '../../../models/Categoria'; // Importa o modelo de Categoria
import CardCategoria from '../cardCategoria/CardCategoria'; // Importa o componente de exibição de categoria


function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]); // Define o estado para armazenar as categorias
  let navigate = useNavigate(); // Utiliza o hook useNavigate para navegação programática

  // Função para buscar as categorias
  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias); // Faz a busca das categorias e atualiza o estado
    } catch (error: any) {
      console.error('Erro ao buscar categorias:', error); // Trata erros de busca de categorias
    }
  }

  useEffect(() => {
    buscarCategorias(); // Executa a busca das categorias quando o componente é montado
  }, []); // O useEffect será executado apenas uma vez, quando o componente for montado

  return (
    <>
      {/* Renderiza o spinner de carregamento enquanto as categorias estão sendo buscadas */}
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      {/* Renderiza as categorias */}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mapeia e renderiza cada categoria */}
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;
