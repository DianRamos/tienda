import { NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";

// Por ahora estamos utilizando data mockeada, pero
// debemos reemplazar esto por información proveniente de la
// API
type IProps = {
  data: TyCsAPIResponse;
};

const TerminosYCondiciones: NextPage<IProps> = ({data}) => {
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - Términos y Condiciones</title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>
      <h2>Terminos y Concidiones</h2>
      <p>Versión: {version}</p>
       {tycs.map(renderTyc)} 
    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API
export async function getStaticProps({locale,}: {locale: string;}): Promise<{ props: { data: TyCsAPIResponse } }>{
  
  const baseUrl = "http://localhost:3000/";
  const response = await fetch(`${baseUrl}/api/tycs/${locale}`);
  const data = await response.json();
  return {
    props:{data,},
  
  }
}


export default TerminosYCondiciones;
