import Header from "../../components/header/Header"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function About() {
    return (
        <>
        <Header/>
        <main>
        <h1 className="text-4xl">Sobre</h1>
        <p>Site feito para concluir a atividade 6 do módulo 3 do curso Dev Full Stack da Codifica</p>
        </main>
        </>
    )
}