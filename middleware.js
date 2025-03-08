export default function middleware(req) {
    const auth = req.headers.get("authorization");
    const expectedAuth = "Basic " + btoa("missiona:kadai");
  
    if (auth !== expectedAuth) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  
    return Response.next();
  }
  