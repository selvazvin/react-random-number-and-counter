import React from "react"
import ReactDOM from "react-dom/client"
import Counter from "./Counter"
import "./style.css"
import Random from "./Random"


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div><Random></Random><br />
    <Counter></Counter></div>
)