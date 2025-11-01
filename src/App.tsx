import "./App.css";
import Cartas from "./components/Carta";

const mostrarCartas = (numero: number, pinta: string) => {
	alert(`Carta de numero:${numero} y de pinta ${pinta}`);
};

function App() {
	return (
		<div>
			<h1>Hola mundo</h1>
			<Cartas numero={5} pinta={"Trebol ♣"} mostrarCartas={mostrarCartas} />
			<Cartas numero={2} pinta={"corazon ♥"} mostrarCartas={mostrarCartas} />
			<Cartas numero={3} pinta={"pica ♠"} mostrarCartas={mostrarCartas} />
			<Cartas numero={4} pinta={"diamante 💎"} mostrarCartas={mostrarCartas} />
		</div>
	);
}

export default App;
