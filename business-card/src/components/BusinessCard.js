
import ButtonBar from "./ButtonBar.js"
import Content from "./Content.js"
import Footer from "./Footer.js"
import Header from "./Header.js"

export default function BusinessCard()
{
    return (
        <div className="profile">
            <Header/>
            <ButtonBar/>
            <Content/>
            <Footer/>
        </div>
    )
}

