// import { db} from '@vercel/postgres'
import { QueryResult} from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import {Todo,NewTodo,db,todoTable} from '@/app/lib/drizzle'
import { sql } from '@vercel/postgres'

export async function GET(request: NextRequest){
    // const client = await db.connect()
    try {
        await sql `CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255))`;
        const res = await db.select().from(todoTable)
        console.log(res);
        return NextResponse.json({ data: res})
    } catch (error) {
        console.log((error as {message: string}).message);
        return NextResponse.json({message: "Something went wrong"})
    }
}

export async function POST(request:NextRequest) {
    const req = await request.json()
    try {
        if(req.task){
            const res = await db.insert(todoTable).values({
                task:req.task
            }).returning()
            return NextResponse.json({message: "Data added successfully", data: res})
        }else{
            throw new Error("Task field is required")
        }
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}