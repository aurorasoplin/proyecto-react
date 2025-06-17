import './App.css'
import Navbar from './componentes/Navbar.jsx'
import CartWidget from './componentes/CartWidget.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'
function App() {

  return (
    <>
      <Navbar />
      
      <ItemListContainer lema={"encuentrate en nuestras prendas"} />
    </>
  )
}

export default App
