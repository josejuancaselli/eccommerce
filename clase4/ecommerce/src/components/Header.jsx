import Title from "./Title"
import Navbar from "./NavBar"

function Header (){
    return(
        <nav>
            <Title titulo= "Tienda Coder" subtitulo="la mejor tienda del mundo"/>
            <Navbar />
        </nav>
    )
}
export default  Header;
