import { useEffect } from "react";

function WelcomeMessage() {
	useEffect(() => {
		console.log("Mensaje de Bienvenida de parte de educa");
	}, []);
	return (
		<div className="w-screen bg-[#FCFCFD] h-screen flex justify-center py-10 px-4">
			<h1 className="text-[#3843D0] text-3xl mt-10 font-semibold">
				Bienvenido a Espacio Educa
			</h1>
		</div>
	);
}
export default WelcomeMessage;
