import dotenv from "dotenv"
import menuPricinpal from "./app/menu/menuPricipal"
dotenv.config()
export function somar(a: number, b: number) {
    return a + b
}

menuPricinpal()