import { NextResponse } from "next/server";
import mockData from "@/app/data/productos.json";

export async function GET(request, {params}){
    const {slug}= params;
    const data = slug ? mockData.filter(item => item.id == slug) : mockData;

    return NextResponse.json(data)
}