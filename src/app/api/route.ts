export const dynamic = 'force-dynamic' // defaults to auto
 
export async function GET(request: Request) {
  return new Response(`${process.env.DB_PASS}`, {
    status: 200,
  })
}