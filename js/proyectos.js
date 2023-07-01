import { getProyectos } from './firebase.js'

let hideSpinner = function(){
  document.getElementById("spinner").style.display = "none";
}

const proyectosSection = document.getElementById("proyectosSection");
const proyectos = [];


function showProyecto(proyecto, index) {
    proyectosSection.innerHTML += `
    <div class="col-lg-4 col-md-6 p-3 galleryItem" id="${index}">
    <div class="my-3">
        <div class="card bg-dark text-white galeriaCard">
          <img src="${proyecto.frame}" class="card-img galeriaImg" alt="...">
          <div class="card-img-overlay d-flex align-items-end">
            <h5 class="card-title">${proyecto.nombre}</h5>
          </div>
        </div>                  
    </div>
  </div>
  `
}


window.addEventListener("DOMContentLoaded", async() => {
    const querySnapshot = await getProyectos();
    querySnapshot.forEach(doc => {
        proyectos.push((doc.data()));
    });
    proyectos.sort((a, b) => {
        return b.id - a.id;
    });
    hideSpinner();
    proyectos.forEach(proyecto => {
        showProyecto(proyecto, proyectos.indexOf(proyecto));
    });

    const galleryItems = document.querySelectorAll('div.galleryItem');
    for (let i=0; i<galleryItems.length; ++i) {
      galleryItems[i].addEventListener('click', redirect);
    }
    
    function redirect() {
      let corto = proyectos[this.id];
      console.log(corto);
      if(corto.sinopsis !== undefined) {
        window.location = "./corto.html";
        localStorage.setItem("corto", JSON.stringify(corto));
      }else {
        window.open(corto.link, '_blank');
      }
    }
})