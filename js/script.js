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

// console.log(list);
function showPage(list, page) {
  const itemsPerPage = 9;
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
      console.log(studentList)
    }
  }
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination() {}

// Call functions
