import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** importing our pages */
import Tracks from "./tracks";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Track from "./track";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000" }),
  cache: new InMemoryCache(),
});
export default function Pages() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<Tracks />} path="/" />
          <Route element={<Track />} path="/track/:trackId" />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
