import ProfilePicture from "../images/business-card-profile-picture.png"
import ButtonBar from "./ButtonBar.js"
import Content from "./Content.js"

export default function Header()
{
    return (
        <div className="profile">
            <img src= {ProfilePicture} alt="person" className="profile-image"/>
            <div>
                <h1>Richard Hudson</h1>
                <h2>Full Stack .Net Developer</h2>
                <p>richardhudson.website</p>
            </div>
            <ButtonBar/>
            <Content/>
        </div>
    )
}

