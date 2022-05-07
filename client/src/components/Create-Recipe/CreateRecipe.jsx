import React from "react"
import Navbar from '../Navbar/Navbar'

export default function CreateRecipe(){
    return(
        <div>
            <Navbar/>
        <form>
            <label htmlFor="nombre">Nombre de la receta</label>
                <input type="nombre" />
            <label htmlFor="imagen">URL de la imagen</label>
                <input type="imagen" />
            <label htmlFor="puntuacion">Puntuacion</label>
                <input type="puntuacion" />
            <label htmlFor="resumen">Resumen</label>
                <input type="resumen" />
            <label htmlFor="instrucciones">Instrucciones</label>
                <input type="instrucciones"/>
            
        </form>
        </div>
    )
}