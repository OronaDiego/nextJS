import { NextResponse } from "next/server";
import mockData from "@/app/data/productos.json";

export async function GET(request, {params}){
    const {id}= params;
    const data = id ? mockData.filter(item => item.id == id) : mockData;

    return NextResponse.json(data)
}