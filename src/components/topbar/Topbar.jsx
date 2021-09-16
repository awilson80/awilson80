import "./topbar.scss"
import { DonutLargeRounded, MailRounded} from "@material-ui/icons"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>

            <div className="wrapper">

                {/* Write text here for left side of topbar */}
                <div className="left">
                    <a href="#intro" className="logo">a.w.</a>
                    
                    <div className="itemContainer">
                        <DonutLargeRounded className="icon" />
                        <span>(405)659-4996</span>
                    </div>
                    
                    <div className="itemContainer">
                        <MailRounded className="icon"/>
                        <span>AlyssaNWilson308@gmail.com</span>   
                    </div>

                </div>

                {/* Write text between the divs for centered text */}

                {/* Write text here for right side of topbar */}
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>

        </div>
    )
}
