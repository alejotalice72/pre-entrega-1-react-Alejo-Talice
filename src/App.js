import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const categorias = ['Juegos de mesa', 'Juguetes Infantiles', 'Juguetes Electronicos'];
  return (
    <>
      <NavBar saludo={'Bienvenido!!'} categorias={categorias}/>
    </>
  );
}

export default App;