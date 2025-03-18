const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
    
    // Toggle images
    const sidebarImages = sidebar.getElementsByTagName('img')
    Array.from(sidebarImages).forEach(img => {
        img.classList.toggle('hidden')
    })

    closeAllSubMenus()
}

function searchSidebar() {
    const searchInput = document.getElementById('search-input');
    const menuItems = sidebar.getElementsByTagName('li');
    const searchTerm = searchInput.value.toLowerCase();

    Array.from(menuItems).forEach(item => {
        const text = item.textContent.toLowerCase();
        const itemImage = item.querySelector('img');
        if (text.includes(searchTerm)) {
            item.style.display = '';
            if (itemImage) itemImage.style.display = '';
        } else {
            item.style.display = 'none';
            if (itemImage) itemImage.style.display = 'none';
        }
    });
}

function toggleSubMenu(button){
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    // Toggle submenu images
    const submenuImages = button.nextElementSibling.getElementsByTagName('img')
    Array.from(submenuImages).forEach(img => {
        img.classList.toggle('visible')
    })

    if(sidebar.classList.contains('close')){
        return;
    }
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(element => {
        element.classList.remove('show')
        element.previousElementSibling.classList.remove('rotate')
        
        // Hide all submenu images
        const submenuImages = element.getElementsByTagName('img')
        Array.from(submenuImages).forEach(img => {
            img.classList.remove('visible')
        })
    });
}