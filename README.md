# Context Api no Reactjs

## Sobre o Codigo

É projeto simple só para mostrar a utilização do context api, fiz a comunicação com uma api publica de geração de imagens de animais utilizando axios.
É possivel escolher um tipo de animal e será gerado com base nesse tipo e mostrado na tela, para pegar o tipo selecionado pelo usuario estou utilizando react hook form.

## Sobre o Context Api

É uma funcionalidade do react que permite a criação de um estado global da aplicação, acessível de forma fácil e eficiente por todos os components que estão envolvidos nela, ao invés de passar informações de estado para o componente através de props.

## Links

Context Api Documentação:
https://legacy.reactjs.org/docs/context.html

## Arquivo de Criação do contexto

```bash
import { createContext, useState,useContext, useEffect } from "react";
import request from "../utils/request";

/*
Utilizado para criação do context.
Estou definido ele com um objeto vazio. 
*/
export const AuthContext = createContext({});

/*
Componente AuthUser onde vai ser usado para declaração das funções, estados, comunicações com apis etc.
O componente tem um paramatro no caso um filho que serão envolvidos pelo componente.
*/
export const AuthUser = ({children}) => {

    const [selectOptions,setSelectOptions] = useState([])

    const hadleImage = async (data) =>{
        const result = await request(`https://api.tinyfox.dev/img?animal=${data}&json`,'GET')
        return result.data
    }

    const hadleSelect = async () =>{
        const result = await request('https://api.tinyfox.dev/img','GET')

        setSelectOptions(result.data.available)
    }

    useEffect(()=>{
        const hadle = async () =>{
           await hadleSelect()
        }
        hadle()
    },[])

    return(
        /*
            Utilizado para fornecer um valor para um contexto no caso os valores que estão dentro
            do value.
        */
        <AuthContext.Provider value={{
            hadleImage,
            selectOptions
        }}>
            {children}
        </AuthContext.Provider>
    )
}

/*
    É utilizado para retornar o valor atual do contexto.
    É essa função que é utilizada pelo filho para consumir os valores do contexto.
*/
export const useAuthUser = () =>{
    return useContext(AuthContext);
}
```

## Utilização no Children

```bash
import { useEffect, useState } from "react";
//importação da função que retorna os valores do contexto.
import { useAuthUser } from "./contexts/UserContext";
import { useForm } from "react-hook-form";
import Select from "./components/Select";

function App() {

  //Utilizando os valores do contexto
  const { hadleImage, selectOptions } = useAuthUser()

```

## Envolvendo o children

```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//importação do componente que recebe filhos
import { AuthUser } from './contexts/UserContext';
window.React = React;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    //envolvendo ele no Component
    <AuthUser>
      <App />
    </AuthUser>
  </React.StrictMode>
);

```

## Para Rodar o Projeto

Necessário Clonar o repositório.

Utilizado para baixar as depencias da bibliotecas e librarys
```
yarn
```
Depois é só rodar o comando abaixo para rodar o projeto
```bash
yarn dev
```
