window.jsPDF = window.jspdf.jsPDF;

function generarPDF() {

    const doc = new jsPDF();

    const nombre = document.getElementById("nombre").value || "Tu Nombre";
    const profesion = document.getElementById("profesion").value || "Tu Profesión";
    const email = document.getElementById("email").value || "";
    const telefono = document.getElementById("telefono").value || "";
    const perfil = document.getElementById("perfil").value || "";
    const experiencia = document.getElementById("experiencia").value || "";
    const educacion = document.getElementById("educacion").value || "";
    const habilidades = document.getElementById("habilidades").value || "";

    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(nombre, 20, y);

    y += 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(profesion, 20, y);

    y += 15;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Contacto", 20, y);

    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 20, y);
    y += 7;
    doc.text(`Teléfono: ${telefono}`, 20, y);

    y += 15;

    function agregarSeccion(titulo, contenido) {

        if (!contenido) return;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(titulo, 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const texto = doc.splitTextToSize(contenido, 170);
        doc.text(texto, 20, y);

        y += texto.length * 7 + 10;

        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    }

    agregarSeccion("Perfil Profesional", perfil);
    agregarSeccion("Experiencia Laboral", experiencia);
    agregarSeccion("Educación", educacion);
    agregarSeccion("Habilidades", habilidades);

    doc.save("CV.pdf");
}
