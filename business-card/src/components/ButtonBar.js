import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function ButtonBar()
{
    return(
        <div>
             <button className="email-button"> 
                <span class="material-symbols-outlined">
                    mail 
                </span>
            </button>
            <button className="linkedin-button"> 
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            
            LinkedIn </button>
            
        </div>
    )
}