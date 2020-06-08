async function addDataVistaProductos() {
    
    var myobj = document.getElementById("grafica");
    myobj.remove();

    var newDiv = document.createElement("canvas"); 
    newDiv.setAttribute("id", "grafica");
    document.getElementById("containerCanvas").appendChild(newDiv);  

    const data = await getData2();
    let miCanvas = document.getElementById("grafica").getContext("2d");
   
    let chart = new Chart(miCanvas, {
    
        type: "horizontalBar",
        data: {
            labels: x,
            datasets: [
                {
                    label: "Vista Productos Comprados",
                    backgroundColor: "rgb(255,255,0)",
                            data: y,
            backgroundColor: [
                
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
        },
        ticks: {
        min: 0,
        stepSize: 1
    }
    
});

}

async function usuariosRegistrados() {
    
    var myobj = document.getElementById("grafica");
    myobj.remove();

    var newDiv = document.createElement("canvas"); 
    newDiv.setAttribute("id", "grafica");
    document.getElementById("containerCanvas").appendChild(newDiv);  

    const data = await getData();
    let miCanvas2 = document.getElementById("grafica").getContext("2d");
    
    var timeFormat = 'DD/MM/YYYY';
    let chart = new Chart(miCanvas2, {
    
        
         type: "line",
        data: {
            labels: fecha,
            datasets: [
                {
                    label: "Vista Productos Comprados",
                    backgroundColor: "rgb(255,255,0)",
                            data: usuario,
            backgroundColor: [
                
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
        },
        ticks: {
        min: 0,
        stepSize: 1
    }
    
});

}
    
document.getElementById("vistaProducto").addEventListener("click", addDataVistaProductos);
document.getElementById("vistaClientes").addEventListener("click", usuariosRegistrados);



  async function addDataComprados() {
    var myobj = document.getElementById("grafica");
    myobj.remove();

    var newDiv = document.createElement("canvas"); 
    newDiv.setAttribute("id", "grafica");
    document.getElementById("containerCanvas").appendChild(newDiv);  

    const data = await getData3();
    let miCanvas3 = document.getElementById("grafica").getContext("2d");
    let chart = new Chart(miCanvas3, {
    
        type: "pie",
        data: {
            labels: poblacion,
            datasets: [
                {
                    label: "Vista Productos Comprados según la población",
                    backgroundColor: "rgb(255,255,0)",
                            data: cantidad,
            backgroundColor: [
                
    'rgba(30, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
        },
        ticks: {
        min: 0,
        stepSize: 1
    }
    
});

}

    
document.getElementById("productosComprados").addEventListener("click", addDataComprados);

let x;
let y;

async function getData2() {
	x = [];
	y = [];
	let resultado = await fetch(`http://localhost:3000/datosGraf2`);
	let data = await resultado.json();
    console.log(data)
	for (let i in data) {
		x.push(data[i].articulos);
		y.push(data[i].cantidad);
	
	}
}

let usuario;
let fecha;

async function getData() {

    usuario = [1,1,3,1];
    fecha = ["Enero", "Febrero", "Abril", "Junio"];

	let resultado = await fetch(`http://localhost:3000/datosGraf`);
	let data = await resultado.json();
    data.map((d)=> {
    const fecha = new Date(d.dates);
    return {
        usuario:d.usuarios,
        fecha:fecha.toLocaleString("es-ES",{
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
    }),
    };
});
  }  



console.log(fecha, usuario)




let cantidad;
let poblacion;

async function getData3() {
    cantidad = [5,3,3];
    poblacion =["castellón", "kingston", "springsfield"];
    
    let resultado = await fetch(`http://localhost:3000/datosGraf3`);
    let data = await resultado.json();
    console.log(data) 
    }
    

