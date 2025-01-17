// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(resp => {
  console.log('Cards ', resp);
  // Create array for article topics
  let articles = Object.keys(resp.data.articles);
  console.log('List of articles', articles);
  // Loops through article topic array
  articles.forEach(element => {
    // Loop through each article relating to topic
    resp.data.articles[element].forEach(item => {
      cardsContainer.appendChild(makeArticle(item));
    });
  });
});

function makeArticle(data) {
  // Create Elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  // Add class
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // Structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorImg);

  // Add Values
  headline.textContent = data.headline;
  authorImg.src = data.authorPhoto;
  authorName.textContent = data.authorName;

  return card;
}

const cardsContainer = document.querySelector('.cards-container');
