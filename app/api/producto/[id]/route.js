import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }

  return NextResponse.json({ id: docSnap.id, ...docSnap.data() });
}