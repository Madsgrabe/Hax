(function() {
    var code = document.querySelectorAll("pre code");
    for (var i = 0; i < code.length; i++) {
      var text = code[i];
      var holder = document.createElement("div");
      holder.style.display = "none";
      text.parentNode.insertBefore(holder, text);
      holder.appendChild(text);
    }
  })();