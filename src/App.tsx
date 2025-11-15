import "./App.css";
import Cartas from "./components/Carta";
import CardDetail from "./components/detalle_carta";

const mostrarCartas = (numero: number, pinta: string) => {
	alert(`Carta de numero:${numero} y de pinta ${pinta}`);
};

function App() {
	return (
		<div className="flex flex-col items-center bg-red-500">
			<CardDetail
				ataque={122}
				nombre="Charizard"
				defensa={80}
				descripcion="charizard mi pokemon favorito Xd"
				imagen="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
				numero={373}
				tipo="Fuego"
			/>
			<h1>Hola mundo</h1>
			<Cartas numero={5} pinta={"Trebol ♣"} mostrarCartas={mostrarCartas} />
			<Cartas numero={2} pinta={"corazon ♥"} mostrarCartas={mostrarCartas} />
			<Cartas numero={3} pinta={"pica ♠"} mostrarCartas={mostrarCartas} />
			<Cartas numero={4} pinta={"diamante 💎"} mostrarCartas={mostrarCartas} />
		</div>
	);
}

export default App;
