import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json('Formulario recibido')
}

export async function POST(request){
    const datosForm = await request.json();

    return NextResponse.json('Los datos se recibieron correctamente')
}