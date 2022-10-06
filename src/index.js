import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import MuiTheme from "./theme/MuiTheme";
import Loader from "./components/loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    supportedLngs: ["en", "uz", "ru"],
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: true },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistor}>
            <MuiTheme>
              <App />
              <ToastContainer />
            </MuiTheme>
          </PersistGate>
        </ReduxProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
