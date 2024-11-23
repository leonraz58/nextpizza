import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET() {

    // const product = await prisma.product.findMany();
    //
    // return NextResponse.json(product)
}

export async function POST(req: NextRequest) {
    // const body = await req.json();
    //
    // const product = await prisma.product.create({data: body})
    //
    // return NextResponse.json(product)
}