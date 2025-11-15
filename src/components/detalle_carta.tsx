type Props = {
	numero: number;
	nombre: string;
	tipo: string;
	ataque: number;
	defensa: number;
	descripcion: string;
	imagen: string;
};

function CardDetail({
	ataque,
	defensa,
	descripcion,
	imagen,
	nombre,
	numero,
	tipo,
}: Props) {
	return (
		<div className="flex flex-col items-center border-4 bg-gray-600 w-2/4">
			<h3>
				{nombre} (#{numero})
			</h3>
			<img className="border-4 bg-gray-500" src={imagen} alt={nombre} />
			<p>Tipo: {tipo}</p>
			<p>Ataque: {ataque}</p>
			<p>Defensa: {defensa}</p>
			<p>{descripcion}</p>
		</div>
	);
}
export default CardDetail;
