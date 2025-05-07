const apiKey = 'TU_CLAVE_API_DE_TMDB';  
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=marvel&language=es-ES&page=1`;

const contenedorPeliculas = document.getElementById("peliculas-marvel");

async function obtenerPeliculasMarvel() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const peliculas = data.results;

    // Crear HTML dinámicamente para cada película
    peliculas.forEach(pelicula => {
      const divPelicula = document.createElement("div");
      divPelicula.classList.add("pelicula");

      divPelicula.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
        <h4>${pelicula.title}</h4>
        <p>Fecha de estreno: ${pelicula.release_date}</p>
        <p>${pelicula.overview}</p>
        <a href="https://www.themoviedb.org/movie/${pelicula.id}" target="_blank">Más información</a>
      `;

      contenedorPeliculas.appendChild(divPelicula);
    });
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    contenedorPeliculas.innerHTML = "<p>No se pudieron cargar las películas en este momento.</p>";
  }
}

// Llamamos a la función para cargar las películas cuando la página se cargue
window.onload = obtenerPeliculasMarvel;
