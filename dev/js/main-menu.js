const toggleMenu=document.querySelector(".toggle-menu");
const sidebar=document.querySelector(".aside");

toggleMenu.addEventListener("click", (e)=>{
    if (e.target.id=='toggle-menu'||e.target.parentElement.id=='toggle-menu'){
        sidebar.classList.toggle('show')
        toggleMenu.classList.toggle('show')
    }
    
})