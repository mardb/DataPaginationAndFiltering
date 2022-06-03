/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/* 
3. Display a “page”

 The list parameter will represent the array of student data we are working with and page parameter will be the page number that we want to display.

*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9;

function showPage(list, page) {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      let studentItem = `
         <li class="student-item cf">
            <div class="student-details">
              <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
              <h3>${list[i].name.first} ${list[i].name.last}</h3>
              <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
              <span class="date">${list[i].registered.date}</span>
            </div>
          </li>
         `;

      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

showPage(data, 1);

/*
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  const linkList = document.querySelector(".link-list");

  linkList.innerHTML = "";

  for (let i = 1; i <= numOfPages; i++) {
    let button = `
   <li><button type="button">${[i]}</button></li>
 `;

    linkList.insertAdjacentHTML("beforeend", button);

    let activeButton = document.querySelector("li button");

    activeButton.className = "active";
  }
  /*
button on console showing buttons -1 on front end looks great
*/
  linkList.addEventListener("click", (e) => {
    if ((e.target.tagName = "BUTTON")) {
      let activeClass = document.querySelector(".active");
      activeClass.className = "";

      e.target.classList.add("active");
      showPage(list, e.target.textContent);
    } else {
      activeClass.classList.remove("active");
    }
  });
}
addPagination(data);

function search(data) {
  let header = document.querySelector("header h2");
  let searchBar = `
   <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label>
   `;
  header.insertAdjacentHTML("afterend", searchBar);
  const searchInput = document.querySelector("#search");
  const searchButton = document.querySelector("button");

  searchInput.addEventListener("keyup", (e) => {
    console.log("keyup is working so far");
  });
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submitted!");
  });
}
search(data);

/*
EXTRA CREDIT

Add functionality to the search component
When the "Search" button is clicked, the list is filtered by student name for those that include the search value. For example, if the name Phillip is typed into the box, list all items with a name that includes Phillip. If the letter S is typed in, all items with an S in the name will show.

Pro Tip: To improve the functionality and add to the user experience, consider adding a keyup event listener to the search input so that the list filters in real time as the user types. This would be in addition to making the search button clickable since pasting text into the search bar might not trigger the keyup event.

Project Warm Up: Configuring a search feature can seem complex at first, but it's really just a few fundamental steps. For some helpful practice, check out the project Warm Up Simple Search.

Paginate search results
Display pagination links based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

Pro Tip: To paginate the search results, try storing the search results in an array that can act as a list, on which you can call your functions to show a page and append pagination links.

Handle no results returned
If no matches are found by the search, include a message in the HTML to tell the user there are no matches.

Note Don't use the built in alert() method here. The "No results" message must be printed to the page.


*/
