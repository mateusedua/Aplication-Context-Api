import { createContext, useState,useContext, useEffect } from "react";
import request from "../utils/request";

export const AuthContext = createContext({});

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
        <AuthContext.Provider value={{
            hadleImage,
            selectOptions
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthUser = () =>{
    return useContext(AuthContext);
}