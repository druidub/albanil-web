export default async (request, context) => {
    const token = request.cookies.get('auth0');
    if (token) return;                    // ya logueado
  
    // redirige a Auth0
    const login = new URL(`https://${context.env.AUTH0_DOMAIN}/authorize`);
    login.searchParams.set('response_type', 'token');
    login.searchParams.set('client_id', context.env.AUTH0_CLIENT_ID);
    login.searchParams.set('redirect_uri', request.url);
    return Response.redirect(login.toString(), 302);
  };
  