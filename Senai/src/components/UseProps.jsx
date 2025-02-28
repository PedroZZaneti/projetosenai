import styles from "../styles/UseProps.module.css";

const UseProps = ({ id, imagem, titulo, localidade, modalidade, horas, inicio}) => {
  //console.log(props);
  return (
    <div className={styles.card}>
      <img src={imagem} className={styles.img} />
      <h4>{titulo}</h4>
      <p>{localidade}</p>
      <p>{modalidade}</p>
      <p>{horas}</p>
      <p>{inicio}</p>
      <br />
      <button>Saiba Mais</button>
    </div>
  );
};

export default UseProps;