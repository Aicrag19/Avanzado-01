type Props = {
    numero:number;
    pinta:string;
    mostrarCartas: (numero: number, pinta: string) => void
};
function Cartas({numero,pinta,mostrarCartas}:Props) {
    const handleClick = ()=>{
    mostrarCartas(numero,pinta)
    }
    return (
        <button onClick={handleClick}>
            <h1>Soy una Carta{numero+300+" "+pinta}</h1>
        </button>
    )
}
export default Cartas