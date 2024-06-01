import React from "react";
import { Header } from "../components/HeaderComp";

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Sign in - Unpod.ai</title>
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
