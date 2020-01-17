// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const divHeader = document.createElement("div");
  const spanDate = document.createElement("span");
  const h1 = document.createElement("h1");
  const spanTemp = document.createElement("span");

  divHeader.classList.add("header");
  spanDate.classList.add("date");
  spanDate.textContent = "SMARCH 28, 2019";
  h1.textContent = "Lambda Times";
  spanTemp.classList.add("temp");
  spanTemp.textContent = "98°";

  divHeader.append(spanDate);
  divHeader.append(h1);
  divHeader.append(spanTemp);

  return divHeader;
}

const placingHeader = document.querySelector(".header-container");

placingHeader.appendChild(Header());
