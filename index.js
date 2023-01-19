/*
    GLISSER DEPOSER
*/
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("container-drap-event");
});
dropArea.addEventListener("dragleave", (event) => {
  dropArea.classList.remove("container-drap-event");
});
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  //recuperer l image
  file = event.dataTransfer.files[0];
  fileExist = event.dataTransfer.files.length;
  displayFile(dropArea);
});

/*
  LES ACTIONS SUR LES IMAGES
*/
function displayFile(area) {
  let fileType = file.type;
  let valideExtention = ["image/jpeg", "image/png", "image/jpg"];

  if (valideExtention.includes(fileType)) {

    if (file.size <= 5000000) {
      //FileReader permet de lire les données d'un fichier de manière asynchrone,
      let fileReader = new FileReader();
      fileReader.onload = () => {
        fileUrl = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    } else {
      alert('Image trop lourde')
    }
  } else {
    alert('format non valide');
  }
}