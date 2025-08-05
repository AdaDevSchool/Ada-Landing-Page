document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('blog-posts-container');
    const apiURL = 'http://127.0.0.1:8000/api/posts/';

    // Función para formatear la fecha
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    // Función para cargar los posts desde la API
    function fetchBlogPosts() {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                return response.json();
            })
            .then(data => {
                postsContainer.innerHTML = ''; // Limpiar el contenedor
                
                if (data.length === 0) {
                    postsContainer.innerHTML = '<p>No hay entradas de blog disponibles por el momento.</p>';
                    return;
                }
                
                data.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('blog-post');

                    /* Manejo de Imagenes */
                    if (post.image) {
                        const postImage = document.createElement('img');
                        postImage.src   = post.image;
                        postImage.alt   = post.title;
                        postImage.style.maxWidth = '100%';
                        postElement.appendChild(postImage)
                    }

                    const title = document.createElement('h2');
                    title.textContent = post.title;

                    const content = document.createElement('p');
                    // Puedes usar innerHTML si el contenido es HTML, pero ten cuidado con la seguridad
                    content.textContent = post.content;

                    const meta = document.createElement('p');
                    meta.classList.add('meta');
                    meta.textContent = `Publicado el ${formatDate(post.published_date)} por ${post.author.email}`;

                    postElement.appendChild(title);
                    postElement.appendChild(content);
                    postElement.appendChild(meta);

                    postsContainer.appendChild(postElement);
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
                postsContainer.innerHTML = '<p>Lo sentimos, no pudimos cargar las entradas del blog.</p>';
            });
    }

    // Llamar a la función para cargar los posts al iniciar la página
    fetchBlogPosts();
});