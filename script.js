// Activar jsPDF correctamente
window.jsPDF = window.jspdf.jsPDF;

function generarPDF() {

    const doc = new jsPDF();

    // Obtener valores
    const nombre = document.getElementById("nombre").value || "Tu Nombre";
    const profesion = document.getElementById("profesion").value || "Tu Profesión";
    const email = document.getElementById("email").value || "";
    const telefono = document.getElementById("telefono").value || "";
    const perfil = document.getElementById("perfil").value || "";
    const experiencia = document.getElementById("experiencia").value || "";
    const educacion = document.getElementById("educacion").value || "";
    const habilidades = document.getElementById("habilidades").value || "";

    let y = 20;

    // ===== NOMBRE =====
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(nombre, 20, y);

    y += 10;

    // ===== PROFESIÓN =====
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text(profesion, 20, y);

    y += 15;

    // ===== CONTACTO =====
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

    // Función para agregar secciones con salto automático
    function agregarSeccion(titulo, contenido) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(titulo, 20, y);
        y += 8;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        const texto = doc.splitTextToSize(contenido, 170);
        doc.text(texto, 20, y);

        y += texto.length * 7 + 10;

        // Si se pasa de la página, crear nueva
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    }

    // ===== SECCIONES =====
    agregarSeccion("Perfil Profesional", perfil);
    agregarSeccion("Experiencia Laboral", experiencia);
    agregarSeccion("Educación", educacion);
    agregarSeccion("Habilidades", habilidades);

    // Descargar PDF
    doc.save("CV.pdf");
}
