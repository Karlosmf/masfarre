const obtenerFolders = async () => {
  try {
      const resultado = await fetch('https://masfarre.com/innodesign/folders.php');
      const data = await resultado.json();
      return data; // Retorna los datos para que puedan ser utilizados
 
  } catch (error) {
      if (error === 400) {
          messageAlert('No se pudo obtener los folders');   
      }
      console.log(error);
  }
  finally {
      console.log('finally');         
  }
}
  
async function replaceDom() {
  const posts = await obtenerFolders(); 
  // Selecciona el contenedor donde se agregarán los elementos <li>
  const container = document.querySelector("#cb-gallery"); // Cambia por el ID o selector de tu contenedor
  // Itera sobre el array 'posts' y crea elementos <li> dinámicamente
  posts.forEach(post => {
    // Crear el elemento <li> dinámicamente
    const li = document.createElement("li");
    li.className = "wow fadeInLeft";
    li.setAttribute("data-wow-duration", "1.5s");
    li.setAttribute("data-wow-delay", ".4s");
  
    // Inserta el contenido HTML en el <li>
    li.innerHTML = `
    <div class="list_inner">
    <div class="imageCaptured">
              <img src="${post.url_image}" alt="${post.title}" />
              <div class="main" data-img-url="${post.url_image}"></div>
              </div>
              <div class="overlay"></div>
              <div class="details">
              <span>${post.description}</span>
              <h3>${post.title}</h3>
              </div>
              <a class="grax_tm_full_link zoom" href="${post.url_image}"></a>
              </div>
              `;
              
    // Agrega el elemento <li> al contenedor
    container.appendChild(li);
  });
}

replaceDom();

