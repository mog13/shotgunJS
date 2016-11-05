window.onload = function() {

    var shotgunReload = function() {
        $(".shotgun").each(function() {
            if (!$(this).hasClass("shot")) {
                $(this).addClass("shot");
                var parent = $(this);
                var width = $(this).width();
                var height = $(this).height();
                $(this).css("position", "relative");
                $(this).children().each(function() {
                    $(this).css("position", "absolute");
                    $(this).css("left", Math.random() * width) - ($(this).width() / 2);
                    $(this).css("top", Math.random() * height) - ($(this).height() / 2);
                })
            }
        })
    }

    var vanillaReload = function() {
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
                child.style.left =  (Math.random() * width) - (child.offsetWidth / 2);
                child.style.top =  (Math.random() * height) - (child.offsetHeight / 2);
              });
            }
        });
    }


    if (window.jQuery) {
        vanillaReload()
    } else {
        console.log("Despite shotgun JS being powerfull innovative and paradigm shifting... it still needs Jquery :(")
    }

}
