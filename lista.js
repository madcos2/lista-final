/* Productos */
var lista = [
   
    {nombre: "Shampu Pantene", cantidad: "1", precio: 11,},
    {nombre: "Shampu Sedal", cantidad: "1", precio: 13,},
    {nombre: "La gotita de poxipol", cantidad: "1", precio: 130,},
    {nombre: "Cinta Scoch", cantidad: "12", precio: 360,},
    {nombre: "Naipes Achazo", cantidad: "50", precio: 95,},
    {nombre: "crema hinos", cantidad: "125", precio: 120,},
    {nombre: "Hisopo ideal ", cantidad: "100", precio: 85,},
    {nombre: "Escarbadientes Aladino", cantidad: "1", precio: 18,},
    {nombre: "Bombillas", cantidad: "1", precio: 50,},
    {nombre: "Solucion kid", cantidad: "1", precio: 120,},
    {nombre: "Fastix", cantidad: "1", precio: 0,},
    {nombre: "Tetina", cantidad: "10", precio: 140,},
    {nombre: "Toallas humedas ideal ", cantidad: "1", precio: 85,},
    {nombre: "anilinas", cantidad: "", precio: 160,},
    {nombre: "Talco eficient", cantidad: "1", precio: 100,},
    {nombre: "Alikate cico", cantidad: "1", precio: 70,},
    {nombre: "Alikate Grande", cantidad: "1", precio: 100,},
   
    {nombre: "Encendedor Bic Maxi", cantidad: "1", precio: 100,},
    {nombre: "Encendedor Transparente", cantidad: "1", precio: 24,},
   
    {nombre: "Ecole", cantidad: "1", precio: 350,},
    {nombre: "Boligona", cantidad: "1", precio: 50,},
    {nombre: "Broche de Ropa", cantidad: "1", precio: 85,},
    {nombre: "Plantilla", cantidad: "1", precio: 120,},
    {nombre: "Guante De trabajo", cantidad: "-", precio: 80,},
    {nombre: "Tulipan", cantidad: "1", precio: 95,},
    {nombre: "Fosforo Fragata", cantidad: "10", precio: 100,},
    {nombre: "Fosforo Patito", cantidad: "1", precio: 48,},
    {nombre: "Presto 3 Filos verde", cantidad: "1", precio: 100,},
    {nombre: "Cepillo colgate", cantidad: "1", precio: 55,},
    {nombre: "Globos liso", cantidad: "50", precio: 280,},
    {nombre: "Cinta Negra Aisladora", cantidad: "1", precio: 60,},
    {nombre: "Cinta embalaje Moderna", cantidad: "1", precio: 120,},
    {nombre: "Quita esmalte", cantidad: "1", precio: 55,},
    {nombre: "Globos Cumpleaños", cantidad: "50", precio: 280,},
    {nombre: "Bengalas", cantidad: "4", precio: 120,},
    {nombre: "Minora 2 plus", cantidad: "1", precio: 50,},
    {nombre: "Pañuelos Elite", cantidad: "6", precio: 65,},
  
  
   
  ];
  

  let tablaProducto = document.getElementById('lista');
  let cuerpoTabla = document.createElement('tbody');

  lista.forEach(p => {
      
      let fila = document.createElement('tr');
      
      let td = document.createElement('td');
      td.innerText = p.nombre;
      fila.appendChild(td);

      td = document.createElement('td');
      td.innerText = "x" + p.cantidad;
      fila.appendChild(td);

      td = document.createElement('td');
      td.innerText = "$" + p.precio;
      fila.appendChild(td);
    

      cuerpoTabla.appendChild(fila);
  });

  tablaProducto.appendChild(cuerpoTabla);

// ==================Fin de la tabla 1========================
 // ==================array 2========================

var listaDos = [ {nombre: "Bayaspirina", cantidad: "30", precio: 220,},
{nombre: "Bayaspirina Forte", cantidad: "20", precio: 200,},
{nombre: "Amoxidal", cantidad: "2", precio: 135,},
{nombre: "Mejoral niños", cantidad: "10", precio: 120,},
{nombre: "Fenamin", cantidad: "6", precio: 200,},
{nombre: "Tafirol Foerte", cantidad: "10", precio: 160,},
{nombre: "Suprabond instantaneo", cantidad: "1", precio: 85,},
{nombre: "Aspirineta ", cantidad: "14", precio: 45,},
{nombre: "Actron", cantidad: "20", precio: 290,},
{nombre: "Sertal", cantidad: "10", precio: 360,},
{nombre: "Ivu rapido Foerte", cantidad: "20", precio: 280,},
{nombre: "Ivu evanol", cantidad: "20", precio: 220,},
{nombre: "Ibuprofeno 600", cantidad: "10", precio: 85,},
{nombre: "Tafirol", cantidad: "10", precio: 130,},
{nombre: "Keterolac", cantidad: "10", precio: 65,},
{nombre: "omeprasol", cantidad: "15", precio: 40,},
{nombre: "Amoxidal", cantidad: "8", precio: 135,},
{nombre: "Alikal", cantidad: "1", precio: 40,},
{nombre: "Uvasal", cantidad: "1", precio: 26,},
{nombre: "Cura Plus", cantidad: "20", precio: 420,},
{nombre: "Pastillas de Carbon", cantidad: "10", precio: 70,},
{nombre: "Buscapina", cantidad: "10", precio: 350,},
{nombre: "Actron 600", cantidad: "20", precio: 720,},
{nombre: "Agua oxigenada", cantidad: "1", precio: 50,},
{nombre: "Te vic", cantidad: "1", precio: 60,},
{nombre: "Solucion Fiiologica", cantidad: "1", precio: 40,},
{nombre: "Preservativos Prime", cantidad: "1", precio: 160,},
{nombre: "evatest", cantidad: "1", precio: 85,},
{nombre: "Curitas cris bian", cantidad: "1", precio: 26,},
{nombre: "Curitas ", cantidad: "1", precio: 40,},
{nombre: "Azufre", cantidad: "5", precio: 55,},
{nombre: "Alchol", cantidad: "1", precio: 120,},
{nombre: "Gasa", cantidad: "10", precio: 130,},
{nombre: "Tela Medicinal", cantidad: "1", precio: 45,},
{nombre: "Cable USB", cantidad: "1", precio: 150,},
{nombre: "Foco led", cantidad: "1", precio: 100,},
{nombre: "Pila duracel AA", cantidad: "1", precio: 80,},
{nombre: "Pila duracel AAA", cantidad: "1", precio: 100,},


];

 // ==================Funcion 2========================


  let tablaProductoDos = document.getElementById('listaDos');
  let cuerpoTablaDos = document.createElement('tbody');

  listaDos.forEach(p => {
      
      let filaDos = document.createElement('tr');
      
      let td = document.createElement('td');
      td.innerText = p.nombre;
      filaDos.appendChild(td);

      td = document.createElement('td');
      td.innerText = "x" + p.cantidad;
      filaDos.appendChild(td);

      td = document.createElement('td');
      td.innerText = "$" + p.precio;
      filaDos.appendChild(td);
    

      cuerpoTablaDos.appendChild(filaDos);
  });

  tablaProductoDos.appendChild(cuerpoTablaDos);

  
 // ==================Fin de la tabla 2========================


 // ==================array 3========================
var listaTres = [ 


  {nombre: "Chupete anatomic cris", cantidad: "6", precio: 300,},
  {nombre: "Mamadera lisa policris", cantidad: "40", precio: 130,},
  {nombre: "Energizer Doble AA", cantidad: "1", precio: 75,},
  {nombre: "Parches", cantidad: "36", precio: 170,},
  {nombre: "Off Crema", cantidad: "1", precio: 85,},
  {nombre: "Off Crema aerosol", cantidad: "1", precio: 190,},
  {nombre: "Presto Venus", cantidad: "1", precio: 100,},
  {nombre: "Fastic", cantidad: "1", precio: 0,},
  {nombre: "Gel Dore", cantidad: "1", precio: 95,},
  {nombre: "Frasco de analisis", cantidad: "1", precio: 45,},
  {nombre: "Cordon Largo", cantidad: "1", precio: 290,},
  {nombre: "Hilo Barrilete", cantidad: "10", precio: 290,},
  {nombre: "Pinza de ceja", cantidad: "12", precio: 330,},
  {nombre: "Gomines", cantidad: "100", precio: 100,},
  {nombre: "Espiral", cantidad: "12", precio: 350,},
 
  {nombre: "Hilo de cocer", cantidad: "12", precio: 240,},
  {nombre: "Invisible", cantidad: "48", precio: 60,},
  {nombre: "Agujas Canasta", cantidad: "1", precio: 35,},
  {nombre: "Colita silicona Mini", cantidad: "1", precio: 20,},
  {nombre: "Cinta de papel Mediana", cantidad: "1", precio: 150,},
  {nombre: "Gillete roja ", cantidad: "5", precio: 150,},
  
  {nombre: "Lapiz", cantidad: "12", precio: 240,},
  {nombre: "Jabon Rexona", cantidad: "1", precio: 55,},
  {nombre: "Dave Aerosol", cantidad: "1", precio: 190,},
 
  {nombre: "Buscapina Perlas", cantidad: "1", precio: 350,},
  {nombre: "Pilas redonda", cantidad: "1", precio: 70,},
  {nombre: "Presto azul", cantidad: "1", precio: 75,},
  {nombre: "Pastillas  azul raid", cantidad: "24", precio: 200,},
  {nombre: "Pilas Redondas (alarma", cantidad: "1", precio: 60,},
  {nombre: "Linterna", cantidad: "1", precio: 260,},
  {nombre: "Espejo Grande", cantidad: "1", precio: 150,},
  {nombre: "Beldent", cantidad: "1", precio: 36,},
  {nombre: "Caramelos Hall", cantidad: "1", precio: 34,},
  {nombre: "Colgate", cantidad: "1", precio: 100,},
  {nombre: "Lapizera azul Bic", cantidad: "1", precio: 25,},
  {nombre: "Fibron", cantidad: "1", precio: 45,},
  {nombre: "Desodorante Odorono", cantidad: "1", precio: 120,},
  {nombre: "Axe Aerosol", cantidad: "1", precio: 175,},
];

 

 // ==================Funcion 3========================




 let tablaProductoTres = document.getElementById('listaTres');
 let cuerpoTablaTres = document.createElement('tbody');

 listaTres.forEach(p => {
     
     let filaTres = document.createElement('tr');
     
     let td = document.createElement('td');
     td.innerText = p.nombre;
     filaTres.appendChild(td);

     td = document.createElement('td');
     td.innerText = "x" + p.cantidad;
     filaTres.appendChild(td);

     td = document.createElement('td');
     td.innerText = "$" + p.precio;
     filaTres.appendChild(td);
   

     cuerpoTablaTres.appendChild(filaTres);
 });

 tablaProductoTres.appendChild(cuerpoTablaTres);



 __________________________________________________________________
