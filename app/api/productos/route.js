import { NextResponse } from "next/server";
import { db } from "@/app/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";

//Consumo todos los documentos de una colleccion 
export async function GET(){
    const productref = collection(db, "productos");
    const querySnapchot = await getDocs(productref);
    const docs = querySnapchot.docs.map(item => (item.data()));
    
    return NextResponse.json(docs);
}

