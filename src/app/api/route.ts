export const dynamic = 'force-dynamic' // defaults to auto
import url from "@/utils/dbConnect"
 
export async function GET(request: Request) {
  console.log(request)
  return new Response(`${url}`, {
    status: 200,
  })
}

export async function POST(request: Request) {
  console.log(request.body);
  return new Response("接受成功")
}