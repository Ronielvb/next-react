import { error } from "console";
import { NextResponse } from "next/server";


export async function POST(request: Request){

    const { email } = await request.json();

    const  user = {
        name: 'DevUser', 
        email: email,  
        access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcyNzExMDY1MSwiZXhwIjoxNzI3MTE0MjUxLCJwcm9maWxlIjoxLCJpZCI6MX0.5pNX60Wmbk5GM_PrMU9r7HqH1oalxgMJ0XnMcll0Tro'
    } 
    return NextResponse.json(user);     
}