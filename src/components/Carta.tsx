type Props = {
	nombre: string;
	mensaje: string;
	imagen: string;
	hora: number;
};

function Cartas({ nombre, mensaje, imagen, hora }: Props) {
	return (
		<div className="flex border-4 bg-white w-2/4">
			<img
				className="border-4 bg-white-500 size-14"
				src={imagen}
				alt={nombre}
			></img>

			<div className="flex justify-between border-4 w-full">
				<div className="flex flex-col">
					<h1>{nombre}</h1>
					<h2>{mensaje}</h2>
				</div>
				<div className="">
					<h1>hora{hora}</h1>
				</div>
			</div>
		</div>
	);
}
export default Cartas;