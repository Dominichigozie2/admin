
// Select all dropdown buttons
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Function to close all dropdowns
function closeAllDropdowns() {
    dropdownBtns.forEach(btn => {
        btn.querySelector('.dropdown').classList.remove('active');
    });
}

// Add click event listener to each dropdown button
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Close all dropdowns except the one with the clicked button
        dropdownBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.querySelector('.dropdown').classList.remove('active');
            }
        });

        // Toggle the "active" class on the dropdown with the clicked button
        const dropdown = btn.querySelector('.dropdown');
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns if user clicks outside of dropdown area
document.addEventListener('click', (event) => {
    let isDropdownClicked = false;

    // Check if click is within any dropdown area
    dropdownBtns.forEach(btn => {
        if (event.target.closest('.dropdown-btn') === btn) {
            isDropdownClicked = true;
        }
    });

    // If click is outside of any dropdown area, close all dropdowns
    if (!isDropdownClicked) {
        closeAllDropdowns();
    }
});


const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('header');
const body = document.querySelector('.body-container');
const closeBtn = document.querySelector('.fa-circle-xmark');

menuBtn.addEventListener('click', () => {
    sideNav.classList.toggle('active');
    body.classList.toggle('active');
    
});
closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('active');
    body.classList.remove('active');
});


document.addEventListener('click', (event) => {
    if (!sideNav.contains(event.target) && !menuBtn.contains(event.target)) {
        sideNav.classList.remove('active');
        body.classList.remove('active');
    }
});
