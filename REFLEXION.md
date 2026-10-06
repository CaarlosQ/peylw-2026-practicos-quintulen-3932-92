1. Copie el fragmento de su código CSS que realiza la animación de rotación vertical del logo del CURZA al pasar el cursor por encima.

- A la imagen le puse un hover con el siguiente código:

    `&:hover{ 
        transform: rotateY(360deg);
        ransition: transform 1s ease-in-out;
    }`
1. ¿Por qué es necesario definir un color de fondo (background-color) en el elemento con position: sticky cuando se realiza el desplazamiento de texto detrás de él? ¿Qué ocurriría si no se define?
- Es necesario definir el color de fondo porque los elementos tienen un color de fondo transparente, el texto del elemento con posicion stiky se mezclaria con el texto de los demás elemntos al hacer scroll.
1. Describa brevemente qué cambio visual ocurre en su sitio al probarlo en una pantalla de tamaño celular (menor a 768px) debido a las directivas @media que implementó.
- En mi caso trate de implementar el diseño mobile first, y lo que sucede es que al achicar la pantalla cambia la disposicion de como estaban ubicadas las secciones. y los tamaños de titulos, texto e imagen.