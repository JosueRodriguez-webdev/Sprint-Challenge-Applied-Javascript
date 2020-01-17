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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(`Success!`, response);
    const tuningIntoArray = Object.entries(response.data.articles);
    console.log(tuningIntoArray);
    tuningIntoArray.forEach((item) => {
      for (let i = 0; i < item.length; i++) {
        console.log(`these what display`, item[i]);
      }
    });
  })
  .catch((err) => {
    console.log(`You got an Error try again`, err);
  });

function cardCreator() {
  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divImg = document.createElement("div");
  const imgInImgContainer = document.createElement("img");
  const span = document.createElement("span");

  // STILL GOT THINGS TO FILL IN HERE!!!
  divCard.classList.add("card");
  divHeadline.classList.add("headline");
  divHeadline.textContent = "FILL THIS IN HERE !!!!!!!!!!!!!!!!!!!";
  divAuthor.classList.add("author");
  divImg.classList.add("img-container");
  imgInImgContainer.src = "FILL THIS IN HERE !!!!!!!!!!!!!!!!!!!";
  span.textContent = "By " + "FILL THIS IN HERE !!!!!!!!!!!!!!!!!!!";

  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(imgInImgContainer);
  divAuthor.appendChild(span);

  return cardCreator;
}
