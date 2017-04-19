var cancha = document.createElement("div");
cancha.setAttribute("id", "cancha");
document.body.appendChild(cancha);

var linea = document.createElement("div");
linea.setAttribute("id", "linea");
document.body.appendChild(linea);
cancha.appendChild(linea);

var pelota1 = document.createElement("div");
pelota1.setAttribute("id", "P1");
pelota1.setAttribute("class", "pelota");
document.body.appendChild(pelota1);
linea.appendChild(pelota1);

var pelota2 = document.createElement("div");
pelota2.setAttribute("id", "P2");
pelota2.setAttribute("class", "pelota");
document.body.appendChild(pelota2);
linea.appendChild(pelota2);

var pelota3 = document.createElement("div");
pelota3.setAttribute("id", "P3");
pelota3.setAttribute("class", "pelota");
document.body.appendChild(pelota3);
linea.appendChild(pelota3);

var arcoDerecha = document.createElement("div");
arcoDerecha.setAttribute("id", "arcoDerecha");
document.body.appendChild(arcoDerecha);
linea.appendChild(arcoDerecha);

var circuloCentral = document.createElement("div");
circuloCentral.setAttribute("id", "circuloCentral");
document.body.appendChild(circuloCentral);
linea.appendChild(circuloCentral);

var arcoIzquierda = document.createElement("div");
arcoIzquierda.setAttribute("id", "arcoIzquierda");
document.body.appendChild(arcoIzquierda);
linea.appendChild(arcoIzquierda);
