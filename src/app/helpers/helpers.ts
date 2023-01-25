function deleteExperience (experience:any, experiences: any) {
  const index: number = experiences.indexOf(experience);
    if (index !== -1) {
      experiences.splice(index, 1);
      return
    }
  }

  function assignParameterToHTMLElement(parameter: string) {
    return (document.getElementById(parameter) as HTMLInputElement).value
  }

  function emptyAnInput (inputs: any){

     for (let input of inputs) {
      (document.getElementById(input) as HTMLInputElement).value = "";
    }

    return;
  }



  export {deleteExperience, assignParameterToHTMLElement, emptyAnInput}
