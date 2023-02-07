const { dialog } = require('@electron/remote');
let fs = require('fs')

let notas = document.getElementById('notas')
let open = document.getElementById('open')
let save = document.getElementById('save')

let notasAlumnos = []
let srcFile
let text = ``

save.disabled = true

function abrir() {
    fileNames = dialog.showOpenDialogSync({
        title: "Abriendo archivos de notas",
        defaultPath: "/files",
        filters: [
            { name: 'name', extensions: ['json'] }
        ]
    })

    srcFile = fileNames[0]
    save.disabled = false
    notasAlumnos = require(srcFile)
    console.log(notasAlumnos)

    for (let i = 0; i < notasAlumnos.length; i++) {
        text += `<tr size="2">
                    <td>${notasAlumnos[i].grupo}</td>
                    <td>${notasAlumnos[i].nombre}</td>
                    <td contenteditable="true" id="td${i}">${notasAlumnos[i].nota}</td>
                </tr>`
    }
    notas.innerHTML = text
}


open.addEventListener('click', () => {
    abrir()
})




save.addEventListener('click', () => {
    let form = notas.text;

    for (let i = 0; i < notasAlumnos.length; i++) {
        notasAlumnos[i].nota = document.getElementById("td" + i).innerHTML
    }
    let saveFile = dialog.showSaveDialogSync()

    let dataDoc = JSON.stringify(notasAlumnos, null, 2)
    console.log(saveFile)
    fs.writeFileSync(saveFile, dataDoc, (err) => {
        if (err) throw err;
        console.log('Datos escritos');
    })
})



