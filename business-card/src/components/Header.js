
import ProfilePicture from "../images/business-card-profile-picture.png"

export default function Header()
{
    return(
    <div>
        <img src= {ProfilePicture} alt="person" className="profile-image"/>
        <div>
            <h1>Richard Hudson</h1>
            <h2>Full Stack .Net Developer</h2>
            <p>richardhudson.website</p>
        </div>
    </div>)
}