// Declaring function for burger icon toggle
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      // Toggle the active class on the clicked dropdown
      dropdown.classList.toggle("active");

      // Hide other dropdowns
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("active");
        }
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((d) => d.classList.remove("active"));
    }
  });
});

// const checkDropdown = document.querySelectorAll(".dropdown"); // equating variable to nav links

// checkDropdown.forEach((dropdown) => {
//   dropdown.addEventListener("mouseover", handleCheckDropdown);
// });

// function handleCheckDropdown(event) {
//   event.preventDefault();
//   const dropdownContent = event.target.querySelector(".dropdown-content");
//   if (dropdownContent) {
//     dropdownContent.style.display = "block"; // show the dropdown content
//   }
// }

// // Add an event listener to hide the dropdown content when clicking outside
// document.addEventListener("click", function (event) {
//   const dropdownContents = document.querySelectorAll(".dropdown-content");
//   dropdownContents.forEach((content) => {
//     if (!content.contains(event.target) && !event.target.closest(".dropdown")) {
//       content.style.display = "none"; // hide the dropdown content
//     }
//   });
// });

// const dropdowns = document.querySelectorAll(".dropdown");

// dropdowns.forEach((dropdown) => {
//   dropdown.addEventListener("mouseover", () => {
//     dropdown.querySelector(".dropdown-content").style.display = "block";
//   });

//   dropdown.addEventListener("mouseout", () => {
//     const dropdownContent = dropdown.querySelector(".dropdown-content");
//     setTimeout(() => {
//       if (
//         !dropdownContent.contains(document.activeElement) &&
//         !dropdownContent.matches(":hover")
//       ) {
//         dropdownContent.style.display = "none";
//       }
//     }, 1000); // adjust the timeout value as needed
//   });

//   const dropdownContent = dropdown.querySelector(".dropdown-content");
//   dropdownContent.addEventListener("mouseover", () => {
//     clearTimeout(dropdownContent.timeout);
//     dropdownContent.style.display = "block";
//   });

//   dropdownContent.addEventListener("mouseout", () => {
//     dropdownContent.timeout = setTimeout(() => {
//       dropdownContent.style.display = "none";
//     }, 1000); // adjust the timeout value as needed
//   });
// });
