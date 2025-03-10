export async function onRequest(context) {
    const username = "missiona";
    const password = "kadai";
  
    const authorization = context.request.headers.get("Authorization");
  
    if (authorization) {
      const encoded = authorization.split(" ")[1];
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === username && pass === password) {
        // 認証OKなら続行
        return await context.next();
      }
    }
  
    // 認証失敗時
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Protected Area"',
      },
    });
  }
  