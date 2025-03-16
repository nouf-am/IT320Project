// Sidebar Menu Active State
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// Toggle Sidebar
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Search Toggle for Mobile
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

// Adjust Sidebar and Search Bar on Window Resize
if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

// Toggle Dark Mode
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

// Notifications Counter Update (Simulated)
const notificationIcon = document.querySelector('.notification .num');

function updateNotifications(count) {
    if (count > 0) {
        notificationIcon.textContent = count;
        notificationIcon.style.display = 'flex';
    } else {
        notificationIcon.style.display = 'none';
    }
}

// Simulating new messages (For future backend integration)
let newMessages = 5;
updateNotifications(newMessages);

// Real Estate Listings Table Sorting (Example for Future Backend Use)
const propertyTable = document.querySelector(".table-data .order table tbody");
const propertyRows = Array.from(propertyTable.rows);

function sortProperties() {
    propertyRows.sort((a, b) => {
        const priceA = parseInt(a.cells[2].textContent.replace(/\D/g, ''));
        const priceB = parseInt(b.cells[2].textContent.replace(/\D/g, ''));
        return priceB - priceA;
    });

    propertyTable.innerHTML = "";
    propertyRows.forEach(row => propertyTable.appendChild(row));
}
document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.querySelector(".bx-menu");
    let sidebar = document.getElementById("sidebar");

    menuButton.addEventListener("click", function () {
        sidebar.classList.toggle("hide");
    });
});

// Simulating Sorting on Page Load
sortProperties();
 