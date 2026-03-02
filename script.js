const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {
    input.addEventListener("input", actualizarPreview);
});

document.getElementById("foto").addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("previewFoto").src = e.target.result;
    };
    if (this.files[0]) {
        reader.readAsDataURL(this.files[0]);
    }
});

function actualizarPreview() {
    document.getElementById("previewNombre").innerText =
        document.getElementById("nombre").value || "Tu Nombre";

    document.getElementById("previewProfesion").innerText =
        document.getElementById("profesion").value || "Tu Profesión";

    document.getElementById("previewEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("previewTelefono").innerText =
        document.getElementById("telefono").value;

    document.getElementById("previewPerfil").innerText =
        document.getElementById("perfil").value;

    document.getElementById("previewExperiencia").innerText =
        document.getElementById("experiencia").value;

    document.getElementById("previewEducacion").innerText =
        document.getElementById("educacion").value;

    const habilidades = document.getElementById("habilidades").value.split(",");
    const lista = document.getElementById("previewHabilidades");
    lista.innerHTML = "";

    habilidades.forEach(h => {
        if (h.trim() !== "") {
            const li = document.createElement("li");
            li.innerText = h.trim();
            lista.appendChild(li);
        }
    });
}

function generarPDF() {
    const element = document.getElementById("cvPreview");

    if (!element) {
        alert("No se encontró el CV para generar el PDF.");
        return;
    }

    const opciones = {
        margin: 0,
        filename: 'CV_Creativo.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opciones).from(element).save();
}
