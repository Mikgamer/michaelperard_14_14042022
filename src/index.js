import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/lib/integration/react"
import "./index.scss"

import App from "./App"
import EmployeeList from "./EmployeeList"
import { store, persistor } from "./store.js"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
