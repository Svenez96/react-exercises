import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from "../../week-3/src/context/TodoContext.jsx";

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
