import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="<your_client_id>">
    <App />
  </GoogleOAuthProvider>
  // <Auth0Provider
  //   domain="dev-0g3c3dxmqjxyqw2c.us.auth0.com"
  //   clientId="oMzUGa6dYetqfOyrTVNkJyeCd189p4oL"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  //   <App />
  // </Auth0Provider>
);
