function showDocument(fileName) {
    var iframe = document.getElementById('document-frame');
    iframe.src = fileName;

}
// Automatically display the first document when the page loads
//window.onload = function() {
    //showDocument('arduino_clock.pdf');
//}
