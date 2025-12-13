import { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [esPar, setEsPar] = useState(true);
	useEffect(() => {
		if (count % 2 === 0) {
			setEsPar(true);
		} else {
			setEsPar(false);
		}
	}, [count]);
	return (
		<div
			className={`w-screen text-[#FCFCFD] ${
				count === 0 ? "bg-purple-400" : esPar ? "bg-orange-500" : "bg-[#3843d0]"
			} h-screen flex flex-col justify-center items-center py-10 px-4`}
		>
			<h1 className="text-3xl mb-6 font-semibold">Contador Educa</h1>
			<p className="text-6xl font-bold">{count}</p>
			<button
				onClick={() => setCount(count + 1)}
				className={`mt-8 px-6 py-2 ${
					esPar ? "text-orange-500" : "text-[#3843d0]"
				} border-2-white bg-white font-medium rounded-lg hover:bg[#FCFCFD] transition`}
			>
				sumar+1
			</button>
			<button
				onClick={() => setCount(count - count)}
				className={`mt-8 px-6 py-2 ${
					esPar ? "text-orange-500" : "text-[#3843d0]"
				} border-2-white bg-white font-medium rounded-lg hover:bg[#FCFCFD] transition`}
			>
				Reiniciar
			</button>
		</div>
	);
}
export default Counter;
