document.querySelectorAll("img").forEach(function(imageElement) {
    imageElement.onclick = function(e) {
        console.log(e.target)
    }
});