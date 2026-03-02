async function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const perfil = document.getElementById("perfil").value;
    const experiencia = document.getElementById("experiencia").value;
    const educacion = document.getElementById("educacion").value;
    const habilidades = document.getElementById("habilidades").value;

    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(nombre, 20, y);

    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 20, y);
    y += 7;
    doc.text(`Teléfono: ${telefono}`, 20, y);

    y += 15;
    doc.setFont("helvetica", "bold");
    doc.text("Perfil Profesional", 20, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(perfil, 170), 20, y);

    y += 20;
    doc.setFont("helvetica", "bold");
    doc.text("Experiencia Laboral", 20, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(experiencia, 170), 20, y);

    y += 30;
    doc.setFont("helvetica", "bold");
    doc.text("Educación", 20, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(educacion, 170), 20, y);

    y += 30;
    doc.setFont("helvetica", "bold");
    doc.text("Habilidades", 20, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(habilidades, 170), 20, y);

    doc.save("Curriculum_Vitae.pdf");
}