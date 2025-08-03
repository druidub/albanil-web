/* 1 · importación por defecto  */
import { createAuth0Client } from "@auth0/auth0-spa-js";

const auth0 = await createAuth0Client({
  domain:  import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin + "/admin/"
  }
});

/* 2 · procesa el retorno ?code=&state= */
if (window.location.search.includes("code=") &&
    window.location.search.includes("state=")) {
  await auth0.handleRedirectCallback();
  window.history.replaceState({}, document.title, "/admin/");
  document.cookie = "auth0=true;path=/;max-age=3600";   // 1 h
}

/* 3 · si aún no está logueado → redirige */
const isAuth = await auth0.isAuthenticated();
if (!isAuth) {
  auth0.loginWithRedirect();
  throw new Error("Redirecting to Auth0…");   // corta la ejecución aquí
}

/* 4 · ¡Autenticado!  Carga Decap CMS de forma dinámica */
await import("https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js");
console.log("✅ Decap CMS loaded");
