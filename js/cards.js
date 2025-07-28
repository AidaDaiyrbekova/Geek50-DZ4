const cardContainer = document.getElementById('cardContainer');

async function cardPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        renderCards(posts.slice(0, 12)); // отобразим, например, первые 12

    } catch (error) {
        console.log(error);
    }
}

function renderCards(posts) {
    posts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
      <img src="https://images.alphacoders.com/810/810561.png" alt="naruto">
      <div class="card-content">
        <h3 class="card-title">${post.title}</h3>
        <p class="card-description">${post.body}</p>
      </div>
    `;

        cardContainer.appendChild(card);
    });
}

cardPosts();
