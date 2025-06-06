import { db } from "@/app/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { categoria } = params;

  const productref = collection(db, "productos");
  const q = query(productref, where("categoria", "==", categoria));
  const querySnapchot = await getDocs(q);
  const docs = querySnapchot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));

  return NextResponse.json(docs);
}

// import { NextResponse } from "next/server";
// import mockData from "@/app/data/productos.json";

// export async function GET(request, {params}){
//     const {categoria}= params;
//     const data = categoria ? mockData.filter(item => item.categoria == categoria) : mockData;

//     return NextResponse.json(data)
// }