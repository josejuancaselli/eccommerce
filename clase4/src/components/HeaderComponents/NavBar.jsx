import Title from "./NavBarComponents/Title";
import CartWidget from "./NavBarComponents/CartWidget";
import List from "./NavBarComponents/List";

function NavBar(){
    return(
        <nav>

            <Title />
            <List />
            <CartWidget />
            
        </nav>
    )
}
export default  NavBar;