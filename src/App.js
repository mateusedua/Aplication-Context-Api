import { useEffect, useState } from "react";
import { useAuthUser } from "./contexts/UserContext";
import { useForm } from "react-hook-form";
import Select from "./components/Select";

function App() {

  const { hadleImage, selectOptions } = useAuthUser()
  const { register,handleSubmit } = useForm()
  const [image, setImage] = useState('')

  const hadleClick = async (data) => {

     const result = await hadleImage(data.tipo === '' ? selectOptions[0] : data.tipo)
     console.log(result.loc)
     setImage(`https://api.tinyfox.dev${result.loc}`)
  }

  return (
    <div className="container mx-auto h-screen flex flex-col gap-3">
      <div className="flex flex-row w-1/4 gap-3 h-14 mt-5">
        <Select register={register} name={"tipo"} data={selectOptions}/>

        <button className="bg-yellow-400 hover:bg-yellow-500 px-2 rounded font-medium"
          onClick={()=> handleSubmit(hadleClick)()}
        >
          Gerar Imagem
        </button>
      </div>
      <div className="w-full h-screen flex justify-center">
        {
          image ?
            <img src={image} className="w-96 h-96"/>
            :
            null
        }
      </div>
    </div>
  );
}

export default App;
