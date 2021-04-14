var links = {
    setColor: function (color) {
      var alist = document.querySelectorAll("a");
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = "color";
        i = i + 1;
      }
    },
  };
  var body = {
    setColor: function (color) {
      document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function (color) {
      document.querySelector("body").style.backgroundColor = color;
    },
  };

  function nightDayHandler(self) {
    var target = document.querySelector("body");
    if (self.value === "Night") {
      self.value = "Day";

      links.setColor("powderblue");
      body.setColor("white");
      body.setBackgroundColor("black");
    } else {
      self.value = "Night";

      links.setColor("blue");
      body.setColor("black");
      body.setBackgroundColor("white");
    }
  }