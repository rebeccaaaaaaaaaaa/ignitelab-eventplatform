import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import {Event} from "./pages/Event";
import {Router} from "./Router";

export default function App() {
  return (
    <>
     <ApolloProvider client={client}>
      <BrowserRouter>
          <Router />
          {/* <Event /> */}
      </BrowserRouter>
    </ApolloProvider>
      
    </>
  );
}
