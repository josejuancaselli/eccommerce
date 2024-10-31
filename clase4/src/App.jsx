import Header from "./components/Header";

import ItemListContainer from "./components/ItemListContainer";


function App() {

    return (
        <div className="container-app">
            <Header/>
            <ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>
        </div>
    )
}

export default App;