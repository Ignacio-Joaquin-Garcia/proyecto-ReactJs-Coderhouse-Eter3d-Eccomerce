//Guardado de Funciones a API


//Fetch Up Data MockUpAPI prueba
const URL = "https://fakestoreapi.com/products";


/*
export function callAPI(){
    const DATA = [
                        {productName:"Panda", price:5000, categoria: "animales",imgUrl:"https://m.media-amazon.com/images/I/61b+cc8bhML.jpg"},
                        {productName:"Stich", price:4500, categoria: "animales", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nbf2lTaId266iQmMV0GNiVM8xPBsJFhJYQmO8xks0o1Cm5aO3TzXLgjFC4xS-eRy8pk&usqp=CAU"},
                        {productName:"Yoda", price:2000, categoria: "animales", imgUrl:"https://tufigura3d.com/wp-content/uploads/2021/03/Impresion-3D-filamento-vs-resina-scaled.jpg"},
                        {productName:"Gatito Hexagonal", categoria: "animales", price:2000, imgUrl:"https://preview.free3d.com/img/2015/12/1688735414812149471/8s69zm9j.jpg"},
                        {productName:"Barco 3d", price:300, categoria: "juguetes", imgUrl:"https://img.pccomponentes.com/pcblog/914/impresion-3d-opt.jpg"},
                        {productName:"Bee Hive Juego de Mesa", price:20000, categoria: "juguetes", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEHvU-1Nf62TnQloJW14VitNf0SLBraMhQ&s"},
                        {productName:"Engranaje", price:22345, categoria: "juguetes", imgUrl:"https://ele.chaco.gob.ar/pluginfile.php/1102641/mod_book/chapter/17742/2.jpg"},
                        {productName:"Funda Violeta", price:100000, categoria: "fundas", imgUrl:"https://i.pinimg.com/474x/c0/9c/05/c09c0515c51b8b61a98e035b32c6d883.jpg"},
                        {productName:"Funda Gato Amarilla", price:100000, categoria: "fundas", imgUrl:"https://recicla3dplabs.wordpress.com/wp-content/uploads/2014/12/img_2770.jpg"},
                    ];
    
    
    DATA.forEach(element => {
        fetch(URL, {
            method: "POST",
            body: JSON.stringify(element),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
    });
}
*/

export function getData(){
    return fetch(URL)
}
