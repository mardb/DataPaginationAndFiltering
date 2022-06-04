/*
This function will create and insert/append the elements needed to display a "page" of nine students from the array of array student data.
*/
const itemsPerPage = 9;

function showPage(list, page) {
  //   calculates the index for the first and last student to display on the page.
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
This function will create and insert/append the elements needed for the pagination buttons. It Takes one parameter, list, which will represent the array of student data we are working with.
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

  // adding event listener so that the pages change on the click of the pagination buttons.
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
