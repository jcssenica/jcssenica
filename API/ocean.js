const apiKey = "4747fc6a61e0448188c69c0d0dfb5206";
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const newsContainer = document.querySelector("#news-container");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;



  fetch(url)
    .then(response => response.json())
    .then(data => {
      newsContainer.innerHTML = "";

      if (data.articles.length === 0) {
        const noResults = document.createElement("p");
        noResults.textContent = "No results found.";
        newsContainer.appendChild(noResults);
      } else {
        data.articles.forEach(article => {
          const articleDiv = document.createElement("div");
          articleDiv.classList.add("article");

          const title = document.createElement("h2");
          title.textContent = article.title;

          const author = document.createElement("p");
          author.textContent = `By ${article.author}`;

          const description = document.createElement("p");
          description.textContent = article.description;

          const link = document.createElement("a");
          link.href = article.url;
          link.textContent = "Read more";

          articleDiv.appendChild(title);
          articleDiv.appendChild(author);
          articleDiv.appendChild(description);
          articleDiv.appendChild(link);

          newsContainer.appendChild(articleDiv);
        });
      }
    })
    .catch(error => console.log(error));
});
