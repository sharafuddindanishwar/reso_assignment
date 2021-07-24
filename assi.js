const downloadBtn = document.querySelector("#downloadBtn");
const imgs = document.querySelectorAll(".img");
window.jsPDF = window.jspdf.jsPDF;

downloadBtn.addEventListener("click", (e) => {
  const doc = new jsPDF();
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  Array.from(imgs).forEach((img, i) => {
    console.log(img);
    doc.addImage(img, "jpeg", 0, 0, width, height, `img${i}`, "SLOW", 0);
    if (i < imgs.length - 1) doc.addPage();
  });

  doc.save("output.pdf");
});
