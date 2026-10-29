1. Copie el fragmento de código JavaScript literal que utilizó para validar si la edad ingresada es menor a 18 años y aplicar el estilo CSS dinámico en la tabla.

- **Codigo JavaScript:**

  ```javascript
  const edadIngresada = parseInt(evento.target.value);
  if (edadIngresada > 0 && edadIngresada < 18) {
  	idResumenEdad.style.backgroundColor = "#ffcccc";
  } else {
  	idResumenEdad.style.backgroundColor = "hsl(218, 35%, 98%)";
  }
  ```

- **Código CSS:**
  ```css
  .cv-completo {
  	display: none;
  	text-align: center;
  	h3 {
  		font-size: 1.8rem;
  		margin-bottom: 1rem;
  	}
  	section {
  		h4 {
  			font-size: 1.3rem;
  			margin: 1rem 0;
  		}
  		p {
  			padding: 0.7rem;
  			font-size: 1.1rem;
  			font-weight: 500;
  			text-decoration: underline;
  		}
  		span {
  			display: block;
  			font-style: italic;
  			padding: 0.2rem;
  		}
  	}
  }
  ```

1. ¿Por qué se utilizó el evento 'input' en lugar de 'change' para realizar el volcado en tiempo real de los campos de texto? Explique la diferencia de comportamiento entre ambos eventos.

- La diferencia es que en el evento `change` solo aparece lo que escribre el usuario una vez el usuario quite el foco del campo input.
- El en evento `input` el cambio se hace en tiempo real mientras el usuario escribe por teclado

1. Describa brevemente cómo solucionó el problema de ejecutar código específico de una página (ej. buscar el botón de biografía) en un archivo JavaScript común sin que genere errores de "null pointer" en la consola de la otra página (ej. al estar en contacto.html).

- Lo solucione mediante un condicional `if`, primero captanto el mediante `querySelector` tanto el botón como el formulario, y preguntando si es que existe, si es verdadero, es decir que existe, entra al condicional y llama a todo lo demás para realizar las acciones de cambio de fondo en la tablas y de mostrar y ocultar el contenido del cv.
