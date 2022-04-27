import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function ButtonBar()
{
    return(
        <div>
             <button className="email-button"> 
                <FontAwesomeIcon icon={solid("envelope")}/>
                Email
            </button>
            <button className="linkedin-button"> 
                <FontAwesomeIcon icon={brands("linkedin")} />  
                linkedin             
             </button>
        </div>
    )
}