import React from "react";
import ReactDOM from "react-dom/client";
//router-dom
import { BrowserRouter } from "react-router-dom";
//react query
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
//redux
import { Provider } from "react-redux";
import { store } from "./app/store";
//components
import App from "./App";
//styles
import "./index.css";
//materialUI
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
