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
const itemsPerPage = 9;
// console.log(list);
function showPage(list, page) {
  const startIndex = page * itemsPerPage - itemsPerPage;
  const endIndex = page * itemsPerPage;
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    //  console.log(list[i]);
    /* The student at these indexes are the ones we want to display on the page. */
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
      // console.log(studentList);
    }
  }
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  // console.log(list)
  // create a variable to calculate the number of pages needed
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  // console.log(numOfPages);
  // select the element with a class of `link-list` and assign it to a variable
  const linkList = document.querySelector(".link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = "";
  // loop over the number of pages needed
  for (let i = 1; i <= numOfPages.length; i++) {
    const button = `<li>
   <button type="button">${i}</button>
 </li>`;

    linkList.insertAdjacentHTML("beforeend", button);
//Next, we'll add the active class to the first button. We can do this by using querySelector to select the first button element and then use the className property to set the class to "active".
    let activeButton = document.querySelector("li > button");
    activeButton.className = "active";

  }


  
  // give the first pagination button a class of "active"

  // create an event listener on the `link-list` element
  // if the click target is a button:
  // remove the "active" class from the previous button
  // add the active class to the clicked button
  // call the showPage function passing the `list` parameter and page to display as arguments
}
addPagination(data);

// Call functions
