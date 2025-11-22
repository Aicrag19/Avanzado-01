import "./App.css";
//import Cartas from "./components/Carta";
//import CardDetail from "./components/detalle_carta";
import Chat from "./components/Chat";

function App() {
	return (
		<div className="bg-gray-600 w-300">
			<Chat
				nombre="Maria"
				mensaje="hola"
				imagen="./src/components/imagenes/1.jpg"
				hora={6}
			/>
			<Chat
				nombre="Delenyer"
				mensaje="Hola"
				imagen="./src/components/imagenes/2.jpeg"
				hora={5}
			/>
			<Chat
				nombre=""
				mensaje="Charizard"
				imagen="./src/components/imagenes/3.jpg"
				hora={2}
			/>
			<Chat
				nombre="hola"
				mensaje="Charizard"
				imagen="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
				hora={10}
			/>
		</div>
	);
}
export default App;
