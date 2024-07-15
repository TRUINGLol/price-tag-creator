import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/route/AppRouter";


//В App.js хранится весь основной интрефейс для отображения на сайте
export default function App(){
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}