import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { assignParameterToHTMLElement, emptyAnInput} from 'src/app/helpers/helpers';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

   /******** Perfil ********* */
  profile: any = [];
  nombreApellidos: string = "";
  especializacion: string = "";
  titulacion: string = "";
  perfil: string = ""
  email: string = ""
  /********* Universidad, cursos, trayectoria y otros conocimientos ******** */
  experiences: any = [];
  courses: any = [];
  years: any = []
  months: any = []
  professionalLevel: any = [];
  levelOfTool: string = "";
  positions: any = [];
  userLevel: any = [];
  /******** Idioma ********* */
  languages: any = [];
  languages2: any = [];
  selectedLanguage: string = "";
  compAud: string = "";
  compLect: string = "";
  interOral: string = "";
  expOral: string = "";
  expEscrita: string = "";
   /******** Proyecto ********* */
projects: any = []
actualProject: boolean = false;
 /******** Publicaciones ********* */
   publications: any = []
   magazineArticles: any = [];
  chapterBooks: any = [];
  presentationAtCongress: any = [];
 /******** Conferencias ********* */
conferences: any = [];
/********************** */
associations: any = []

infoUniversity: string = `En esta sección deberás proporcionarnos información sobre tu/s titulo/s universitario/s.`
infoLanguages: string = `En esta sección deberás detallar los idiomas que dominas `

  constructor() { }

  ngOnInit(): void {
for (let i = 1950; i <= 2022 ; i++){
  this.years.push(i)
}
this.years = this.years.reverse()
this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"]
  }




  addPosition (position: string, enterprise: string, description: string, initialYear : string, finalYear:string){
let positionElement = assignParameterToHTMLElement(position)
let enterpriseElement = assignParameterToHTMLElement(enterprise)
let descriptionElement = assignParameterToHTMLElement(description)
let initialYearElement = assignParameterToHTMLElement(initialYear)
let finalYearElement = assignParameterToHTMLElement(finalYear)


const positions = [];
positions.push({
cargo: positionElement,
empresaCargo: enterpriseElement,
descripTrayect:descriptionElement,
fechaInicio: initialYearElement,
fechaFinal: finalYearElement
})

if(positionElement === "" || enterpriseElement === "" || descriptionElement === "" || initialYearElement === "" || finalYearElement === "" ){
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
  return;
}else if(parseInt(initialYearElement) > parseInt(finalYearElement)){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: "El Año de inicio no puede ser mayor que el año de finalización",
  })
  return;
}

else {
    this.positions.push(...positions)
}
emptyAnInput([position, enterprise, description, initialYear, finalYear])

return;

}

/*********************************************************************************************** */

addProfile (name: string, surname: string, position: string, profile: string, email: string){
  let nameElement =  assignParameterToHTMLElement(name);
  let surnameElement = assignParameterToHTMLElement(surname);
  let positionElement = assignParameterToHTMLElement(position);
  let profileElement = assignParameterToHTMLElement(profile);
  let emailElement = assignParameterToHTMLElement(email);


  if(nameElement === "" || surnameElement === "" || positionElement === "" || profileElement === "" || emailElement === "" ){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
    return;
  }else {
    this.nombreApellidos = nameElement + " " + surnameElement;
    this.especializacion = positionElement;
    this.perfil = profileElement;
    this.email = emailElement

      this.profile = [{
        nombreApellidos: nameElement + " " + surnameElement,
        especializacion: positionElement,
        perfil: profileElement
      }]

  }

  emptyAnInput([name, surname, position, profile, email])
    return

};

  addFormation(center:string, title:string, initialYear:string, finalYear:string){
    let centerElement = (document.getElementById(center) as HTMLInputElement).value
    let titleDegreeElement = (document.getElementById(title) as HTMLInputElement).value
    let initialYearElement = (document.getElementById(initialYear) as HTMLInputElement).value
    let finalYearElement = (document.getElementById(finalYear) as HTMLInputElement).value

    let experiences = []
    experiences.push({
      centerElement,
      titleDegreeElement,
      initialYearElement,
      finalYearElement,
      center
    })


    if(centerElement === "" || titleDegreeElement === "" || initialYearElement === "" || finalYearElement === "" ){
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
      return;
    } else if(parseInt(initialYearElement) > parseInt(finalYearElement)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "El Año de inicio no puede ser mayor que el año de finalización",
      })
      return;
    }
    else {
      if(center === "universidad"){
        this.experiences.push(...experiences)
      } else if (center === "centroDeFormacion"){
        this.courses.push(...experiences)
      }


    }


    emptyAnInput([center, title, initialYear, finalYear])
    return
  }

  addConference(conference: string, place: string, year: string) {

    let conferenceElement = assignParameterToHTMLElement(conference);
    let placeElement = assignParameterToHTMLElement(place);
    let yearElement = assignParameterToHTMLElement(year);


    if(conferenceElement === "" || placeElement === "" || yearElement === ""){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
    } else{
    this.conferences.push({
      Conferencia: `${conferenceElement}. ${placeElement} (${yearElement})`
    })
    }

    emptyAnInput([conference, place, year])

  }

  levelOfToolManagement(level: string){

if ((document.getElementById(level) as HTMLInputElement).name === "nivelProfesional"){
    (document.getElementById("nivelUsuario") as HTMLInputElement).checked = false
  } else if ((document.getElementById(level) as HTMLInputElement).name === "nivelUsuario") {
    (document.getElementById("nivelProfesional") as HTMLInputElement).checked = false
  }
this.levelOfTool = level;
return this.levelOfTool
  }

  addAnotherKnowledges(tool: any) {
    let professionalElement = assignParameterToHTMLElement(tool)
    let knowledge = (document.getElementById(this.levelOfTool) as HTMLInputElement)

    if (professionalElement === ""){
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
      return
    }


    if (knowledge.name === "nivelProfesional" && knowledge.checked === true){
      this.professionalLevel.push({
        ProgramaProfesional: professionalElement
      })
    } else if(knowledge.name === "nivelUsuario" && knowledge.checked === true) {
          this.userLevel.push({
            ProgramaUsuario: professionalElement
          })

      }
      console.log(this.professionalLevel)

    knowledge.checked = false;
    emptyAnInput([tool])
        return
  }

  addLanguage(language: any) {

      this.selectedLanguage = assignParameterToHTMLElement(language[0]);

    if ( this.selectedLanguage === ""){
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
      return
    }


    if(this.languages.length < 4) this.languages.push({
          Idioma: this.selectedLanguage,
          CompAud: this.compAud,
          CompLect: this.compLect,
          InterOral:   this.interOral,
          ExpresOral:   this.expOral,
          ExpresEscrita: this.expEscrita
    })
       else{
      Swal.fire({
        icon: 'warning',
        title: 'Carga de idiomas',
        text: "Se pueden cargar hasta 4 idiomas. Pero no te preocupes, este formulario genera un archivo de Word que puedes editar",
      })
      return;
    }

  this.languages2 = this.languages.map((item:any, i:any):any => {

           if (i == 0){
            return {
                    Idioma: item.Idioma,
                    CompAud: item.CompAud,
                    CompLect: item.CompLect,
                    InterOral:   item.InterOral,
                    ExpresOral:   item.ExpresOral,
                    ExpresEscrita: item.ExpresEscrita
                  }
           }

           return Object.fromEntries( new Map([[ `Idioma${i+1}`,  item.Idioma ],
             [`CompAud${i+1}`, item.CompAud],
             [`CompLect${i+1}`, item.CompLect],
             [`InterOral${i+1}`, item.InterOral],
             [`ExpresOraL${i+1}`, item.ExpresOral],
             [`ExpresEscrita${i+1}`, item.ExpresEscrita]
            ]))

    })

   this.languages2 = [this.languages2.reduce((acc:any, red:any )=> Object.assign(acc,red) )]


    emptyAnInput(language)


    return;

  }

  addProject(project: string, month: string, year: string, finalMonth:string, finalYear:string, enterprise: string, description:string, country: string){

    let projectElement = assignParameterToHTMLElement(project);
    let monthElement = assignParameterToHTMLElement(month);
    let yearElement = assignParameterToHTMLElement(year);
    let finalMonthElement = assignParameterToHTMLElement(finalMonth);
    let finalYearElement = assignParameterToHTMLElement(finalYear);
    let enterpriseElement = assignParameterToHTMLElement(enterprise);
    let descriptionElement = assignParameterToHTMLElement(description);
    let countryElement = assignParameterToHTMLElement(country);


    if (projectElement === "" || monthElement === "" ||  (finalMonthElement === "" && !this.actualProject) || (finalYearElement === "" && !this.actualProject) ||  enterpriseElement === "" || enterpriseElement === ""){
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
      return
    } else {
    this.projects.push({
      proyecto: projectElement,
      fechaProyecto: `${monthElement}.${yearElement}`,
      fechaFinalProyecto: !this.actualProject ? `${finalMonthElement}.${finalYearElement}` : "Actual",
      empresaProyecto: enterpriseElement,
      descripProyecto: descriptionElement,
      paisProyecto: `| ${countryElement}.`.toUpperCase()

    })

    }

    emptyAnInput([project, year, month, enterprise, finalMonth, finalYear, description, country])
    return;

  }

  hideFinalProject(){
    this.actualProject = (document.getElementById("actualProject") as HTMLInputElement).checked;

    if (this.actualProject) {
      (document.getElementById("mesFinalProyecto") as HTMLInputElement).disabled = true;
      (document.getElementById("añoFinalProyecto") as HTMLInputElement).disabled = true;
    } else {
      (document.getElementById("mesFinalProyecto") as HTMLInputElement).disabled = false;
      (document.getElementById("añoFinalProyecto") as HTMLInputElement).disabled = false;
    }
  }

  addPublication(publication: string, authors: string, title: string, magazine: string, pages:string,  year: string,  ){

    let publicationElement = assignParameterToHTMLElement(publication);
    let authorsElement = assignParameterToHTMLElement(authors);
    let titleElement = assignParameterToHTMLElement(title);
    let magazineElement = assignParameterToHTMLElement(magazine);
    let pagesElement = assignParameterToHTMLElement(pages);
    let yearElement = assignParameterToHTMLElement(year);



    if (publicationElement === "" || authorsElement === "" || titleElement === "" || magazineElement === "" || pagesElement === "" || yearElement === ""){
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Te quedaron campos sin rellenar",
    })
      return
    } else {

      if (publicationElement === "articulosEnRevistas") {
        this.publications.push({
          ArticuloRevista: `${authorsElement}. ${magazineElement} , ${pagesElement}, ${yearElement}, ${titleElement}`
        })
        this.magazineArticles.push({
          ArticuloRevista: `${authorsElement}. ${magazineElement} , ${pagesElement}, ${yearElement}, ${titleElement}`
        })
      } else if (publicationElement === "capitulosEnLibros"){
        this.publications.push({
          CapituloLibro: `${authorsElement}. ${magazineElement} , ${pagesElement}, ${yearElement}, ${titleElement}`
        })
        this.chapterBooks.push({
          CapituloLibro: `${authorsElement}. ${magazineElement} , ${pagesElement}, ${yearElement}, ${titleElement}`
        })
      } else if (publicationElement === "ponenciasEnCongresos") {
        this.publications.push({
          PonenciasCongresos: `${authorsElement}. ${magazineElement} , ${pagesElement}, ${yearElement}, ${titleElement}`
        })
        this.presentationAtCongress.push({
          PonenciasCongresos: `${authorsElement}. ${magazineElement} , ${pagesElement}, ${yearElement}, ${titleElement}`
        })
      }

    }


    emptyAnInput([publication, authors, title, magazine, pages, year])
    return;


  }

  addAssociations(association: string){

    let associationElement = assignParameterToHTMLElement(association);

    if(associationElement === ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Te quedaron campos sin rellenar",
      })
        return
    } else {
      this.associations.push({
        Asociacion: associationElement
      })
    }



emptyAnInput([association])

return;

  }

  deleteExperience (experience:any, experiences: any) {
    const index: number = experiences.indexOf(experience);
      if (index !== -1) {
        experiences.splice(index, 1);
        return
      }
    }


  guardar(formValues?: NgForm){
    sessionStorage.setItem("idiomas", JSON.stringify(this.languages))
    sessionStorage.setItem("cursos", JSON.stringify(this.courses))
    sessionStorage.setItem("universidad", JSON.stringify(this.experiences))
  }

  send(){
    let courses =  JSON.parse(sessionStorage.getItem("cursos")!).map((curso:any) => {

      return {
        Curso:   `${curso.titleDegreeElement} (${curso.initialYearElement} - ${curso.finalYearElement}). ${curso.centerElement} `
      }

    })
    let university = JSON.parse(sessionStorage.getItem("universidad")!).map((universidad:any) => {
      return {
        titulacion:   `${universidad.titleDegreeElement.toUpperCase()} (${universidad.initialYearElement} - ${universidad.finalYearElement}) `,
        universidad: universidad.centerElement
      }
    });

      var xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://prod-239.westeurope.logic.azure.com:443/workflows/a9d26fd901fd4b358235dfaf714a9846/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=s4Ph2xwqIpenOcO0F7VyBUp0unRMMeGrYvD-_pfwwTw",
        true
      );

  xhr.setRequestHeader("Content-Type", "application/json")


  xhr.send(JSON.stringify({

    nombreApellidos: this.nombreApellidos,
    correoElectronico: this.email,
    especializacion: this.especializacion,
    titulacion: this.titulacion,
    perfil: this.perfil,
    Idiomas:{idioma: this.languages2},
    Cursos: {cursos: courses},
    titulacionUniversitaria: {titulacion: university},
    ManejoNivProfesional: {nivelProfesional: this.professionalLevel},
    ManejoNivUsuario: {nivelUsuario: this.userLevel},
    Conferencias: {conferencias: this.conferences},
    Proyectos: {proyectos: this.projects},
    trayectoriaProfesional: {cargos: this.positions},
    articulosEnRevistas: {articulosArray: this.magazineArticles},
    capitulosLibros: {capitulosArray: this.chapterBooks},
    ponenciasEnCongresos: {ponenciasArray: this.presentationAtCongress},
    AsociacionesTécnicas: {asociaciones: this.associations}
  }))

  Swal.fire('Completado!'
  , 'Sus datos se han enviado correctamente, en breve se le enviará el archivo de Word!'
  , 'success'
  ).then(result => {
    if (result.isConfirmed) {
      location.reload()
    }
  })


}


}
