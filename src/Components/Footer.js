import FB from "../Images/FB.png"
import GH from "../Images/GH.png"
import IG from "../Images/IG.png"
import TW from "../Images/TW.png"


export default function Footer(){
    return(
        <div className="footer">
            <img src={FB} alt="facebook icon" />
            <img src={GH} alt="Github icon"/>
            <img src={IG} alt="instagram icon"/>
            <img src={TW} alt="twitter icon"/>
        </div>
    )
}