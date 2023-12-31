function convertToImage() {
  // Use html2canvas to capture the content of the 'content' div
  html2canvas(document.getElementById('content')).then(function(canvas) {
    // Create a link element
    var link = document.createElement('a');

    // Set the link's href to the data URL of the canvas (the converted image)
    link.href = canvas.toDataURL('image/png');

    // Set the download attribute to specify the file name when downloaded
    link.download = 'receipt.png';

    // Programmatically click the link to trigger the download
    link.click();
  });
}
