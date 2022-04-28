import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function Footer ()
{
    return (
        <div className="footer">
            <div>
                <FontAwesomeIcon icon={brands("twitter-square")} size="lg"/> 
            </div>
            <div>
                <FontAwesomeIcon icon={brands("instagram-square")} size="lg"/>
            </div>
            <div>
                <FontAwesomeIcon icon={brands("facebook-square")} size="lg"/>
            </div>
            <div>
                <FontAwesomeIcon icon={brands("github-square")} size="lg"/>
            </div>       
        </div>
    )
}