import NavBar from "./headerComponets/NavBar";
import ItemListContainer from "./headerComponets/ItemListContainer";



function Header (){
    return(
        <header>
            <NavBar />
            <ItemListContainer greeting="Bienvenidos a nuestra tienda"/>
        </header>
    )
}

export default  Header;
