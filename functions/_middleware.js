export const onRequest = async ({ request }) => {
    const username = "missiona";
    const password = "kadai";
  
    const authHeader = request.headers.get("Authorization");
    if (authHeader) {
      const encoded = authHeader.split(" ")[1];
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === username && pass === password) {
        return; // 認証OKならそのまま続行
      }
    }
  
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Protected Area"',
      },
    });
  };
  