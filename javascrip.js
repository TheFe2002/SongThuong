var menus = document.querySelectorAll(".menu--mobile >ul .sub-menu")
var dropdowns = document.querySelectorAll(".sub-menu .dropdown--mobile")
    menus.forEach(function (event,index) {
        var menu = menus[index];
        var dropdown = dropdowns[index]
        menu.onclick = function () {
            dropdown.classList.toggle("dropdownActive")
        }
    })
