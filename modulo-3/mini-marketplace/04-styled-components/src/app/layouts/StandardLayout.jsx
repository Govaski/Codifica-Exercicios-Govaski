import { Outlet } from "react-router-dom"
import Header from "../../widgets/header/Header"

export default function StandardLayout () {
    return (
        <>
        <Header/>
        <Outlet style={{paddingTop: '50px'}}/>
        </>
    )
}