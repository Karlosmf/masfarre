const posts = [
    {
      url_image: "https://via.placeholder.com/150",
      category: "Technology",
      title: "The Future of AI"
    },
    {
      url_image: "https://via.placeholder.com/150",
      category: "Travel",
      title: "Top 10 Destinations for 2024"
    },
    {
      url_image: "https://via.placeholder.com/150",
      category: "Health",
      title: "Benefits of a Balanced Diet"
    },
    {
      url_image: "https://via.placeholder.com/150",
      category: "Sports",
      title: "The Rise of eSports"
    },
    {
      url_image: "https://via.placeholder.com/150",
      category: "Business",
      title: "How to Start a Startup"
    },
    {
      url_image: "https://via.placeholder.com/150",
      category: "Education",
      title: "Learning JavaScript in 30 Days"
    },
    {
      url_image: "img/portfolio/1.jpg",
      category: "Fashion",
      title: "2024 Trends in Fashion"
    },
    {
      url_image: "https://picsum.photos/seed/picsum/300",
      category: "Entertainment",
      title: "Top Movies to Watch This Year"
    },
    {
      url_image: "https://picsum.photos/seed/picsum/300",
      category: "Science",
      title: "Exploring the Universe"
    }
  ];
  
  // Selecciona el contenedor donde se agregarán los elementos <li>
const container = document.querySelector("#cb-gallery   "); // Cambia por el ID o selector de tu contenedor

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
        <div class="image">
            <img src="${post.url_image}" alt="${post.title}" />
            <div class="main" data-img-url="${post.url_image}"></div>
        </div>
        <div class="overlay"></div>
        <div class="details">
            <span>${post.category}</span>
            <h3>${post.title}</h3>
        </div>
        <a class="grax_tm_full_link zoom" href="${post.url_image}"></a>
    </div>
  `;

  // Agrega el elemento <li> al contenedor
  container.appendChild(li);
});

