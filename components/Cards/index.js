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

const cardsInHtml = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(`Success!`, response);
    const tuningIntoArray = Object.entries(response.data.articles);
    console.log(`This is turning the object into an array`, tuningIntoArray);
    tuningIntoArray.forEach((item) => {
      let grabingItem1 = Object.entries(item[1]);
      console.log(`trying to grab item`, grabingItem1);
      grabingItem1.forEach((obj) => {
        console.log("this suppose to single it out", obj[1]);
        const finalAttempt = obj[1];
        const runningItInFunction = cardCreator(finalAttempt);
        cardsInHtml.appendChild(runningItInFunction);
      });
    });
  })
  .catch((err) => {
    console.log(`You got an Error try again`, err);
  });

function cardCreator(obj) {
  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divImg = document.createElement("div");
  const imgInImgContainer = document.createElement("img");
  const span = document.createElement("span");

  // STILL GOT THINGS TO FILL IN HERE!!!
  divCard.classList.add("card");
  divHeadline.classList.add("headline");
  divHeadline.textContent = obj.headline;
  divAuthor.classList.add("author");
  divImg.classList.add("img-container");
  imgInImgContainer.src = obj.authorPhoto;
  span.textContent = "By " + obj.authorName;

  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(imgInImgContainer);
  divAuthor.appendChild(span);

  return divCard;
}
