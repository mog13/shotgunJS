var shotgunReload = function() {
    var shells = [].slice.call(document.getElementsByClassName("shotgun"));
    shells.forEach(function(element) {
        if ((' ' + element.className + ' ').indexOf(' ' + "shot" + ' ') === -1) {
            element.classList.add("shot");
            var width = element.offsetWidth;
            var height = element.offsetHeight
            element.style.position = "relative";
            var children = [].slice.call(element.children);
            children.forEach(function(child) {
                child.style.position = "absolute";
                child.style.left = (Math.random() * width) - (child.offsetWidth / 2);
                child.style.top = (Math.random() * height) - (child.offsetHeight / 2);
            });
        }
    });
}

window.onload = function() {
  shotgunReload();  
}
