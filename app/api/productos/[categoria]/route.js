import { NextResponse } from "next/server";
import mockData from "@/app/data/productos.json";

export async function GET(request, {params}){
    const {categoria}= params;
    const data = categoria ? mockData.filter(item => item.categoria == categoria) : mockData;

    return NextResponse.json(data)
}