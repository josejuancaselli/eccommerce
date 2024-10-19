import Title from "./navBarComponents/Title";
import CartWidget from "./navBarComponents/CartWidget";
import List from "./navBarComponents/List";

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
