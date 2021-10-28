export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`Hello world! Request method: ${request.method}`)
}
