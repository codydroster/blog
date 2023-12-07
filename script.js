function showDocument(fileName) {
    var iframe2 = document.getElementById('document-frame');
    iframe2.src = fileName;

}
// Automatically display the first document when the page loads
window.onload = function() {
    document.getElementById('defaultDoc').click();

}
