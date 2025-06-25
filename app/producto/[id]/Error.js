'use client';

import { useEffect } from "react";


export default function Error({error, reset}){
    useEffect(()=>{
        console.log('Error' + error);
        
    },[error])
    
    return <>
            <div className="container m-auto my-40 text-center">
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 darck:gb-gray-800 darck
                :text-red-400" role= "alert">
                <span className="font-medium">Error al cargar la pagina</span>
                </div>
                <div>
                    <Button onClick={reset}>volver</Button>
                </div>
            </div>
            </>
}
