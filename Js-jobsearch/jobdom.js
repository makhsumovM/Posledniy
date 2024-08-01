

let box = document.querySelector(".box")

function get(arr){
    arr.forEach(el => {
        
        let kartochki = document.createElement("div")
        kartochki.classList.add("kartochki")
        let divForJobName = document.createElement("div")
        divForJobName.classList.add("divForJobName")
        let JobName  = document.createElement("h3")
        JobName.innerHTML = el.JobName
        let JobCategory = document.createElement("p")
        JobCategory.innerHTML = el.JobCategory
        JobCategory.classList.add("JobCategory")
        let JobLevel = document.createElement("p")
        JobLevel.innerHTML= el.JobLevel
        JobLevel.classList.add("JobLevel")
        divForJobName.append(JobName,JobCategory)
        let divKartochkiBolo = document.createElement("div")
        divKartochkiBolo.classList.add("divKartochkiBolo")
        divKartochkiBolo.append(divForJobName,JobLevel)
        let btnSeeMore = document.createElement("button")
        btnSeeMore.innerHTML = "SeeMore"
        btnSeeMore.classList.add("btnSeeMore")
        let Location = document.createElement("div")
        Location.innerHTML = el.Location
        Location.classList.add("Location")
        let divKartochkiPoyon = document.createElement("div")
        divKartochkiPoyon.classList.add("divKartochkiPoyon")
        divKartochkiPoyon.append(btnSeeMore,Location)
        kartochki.append(divKartochkiBolo,divKartochkiPoyon)
        box.append(kartochki)

    });
}

////барои ссылкахо 
const currentUrl = window.location.pathname;

let links = document.querySelectorAll(".nav-link")
links.forEach((link)=>{
    if(link.getAttribute('href')==="#"){
        link.classList.add("active")
    }
})


export {get}