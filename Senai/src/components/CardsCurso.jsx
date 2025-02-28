  import styles from '../styles/CardsCurso.module.css'
  import { useState } from "react";
  import UseProps from "../components/UseProps";

  const CardsCurso = () => {

    const [cursos] = useState([
      {
        id: 1,
        titulo: "Fisolofia Freestyle",
        imagem: "https://www.cmm.am.gov.br/wp-content/uploads/2023/01/32346018173_3099a4ed66_k.jpg",
        localidade: "Vitoria",
        modalidade: "Licenciatura",
        horas: 1280,
        inicio: "27/05/2025"
      },
      {
        id: 2,
        titulo: "Educação Fisica Quantica",
        imagem: "https://www.edocente.com.br/wp-content/uploads/2023/09/happy-children-enjoying-their-gym-class.jpg",
        localidade: "Vitoria",
        modalidade: "Bacharel",
        horas: 2460,
        inicio: "25/04/2025"
      },
      {
        id: 3,
        titulo: "Engenharia Civil No Olho",
        imagem: "https://www.aogengenharia.com.br/wp-content/uploads/2019/03/aog_noticia_-importancia_adm_engenharia_civil_img.jpg",
        localidade: "Vitoria",
        modalidade: "Licenciatura",
        horas: 580,
        inicio: "25/04/2025"
      }
      
    ])

    return (
      
          <div>
           <div>
           <h1>Cursos Disponiveis</h1>
            <div className={styles.MainDiv} >
            
              {cursos.map((cursos)=>(
                <UseProps
                key={cursos.id}
                titulo={cursos.titulo}
                imagem={cursos.imagem}
                localidade={cursos.localidade}
                modalidade={cursos.modalidade}
                horas={cursos.horas}
                inicio={cursos.inicio}
                />
              ))}
            </div>
            </div>
          </div>
      
    );
  };

  export default CardsCurso
