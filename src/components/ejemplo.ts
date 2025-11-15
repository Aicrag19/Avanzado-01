type Persona = {
	nombre: string;
	apellido: string;
	edad: number;
	cedula: string; //
	telefonos?: string[]; // lista opcional
    familia: Persona []
};
const Pedro : Persona={
    nombre:"Delenyer",
    apellido:"garcia",
    edad:22,
    cedula:"22808311",
    familia:[{
    nombre:"Delenyer",
    apellido:"garcia",
    edad:22,
    cedula:"22808311",
    familia:[]
    }]
}
const familia: Persona =[{
    
}]

}