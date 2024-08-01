


let jobTable = document.querySelector(".jobTable")

function get(arr){
    arr.forEach(el => {
        let tr = document.createElement("tr")
        
    });
}




////барои ссылкахо 
let links = document.querySelectorAll(".nav-link")
links.forEach((link)=>{
    if(link.getAttribute('href') === "#"){
        link.classList.add("active")
    }
})

export {get}