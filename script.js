function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  //typrewriter effect
  const words = ["Soundarya.    ", "சௌந்தர்யா.    ", "सौंदर्या|    "];
  let i = 0;
  let timer;

  function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
      if (word.length > 0) {
        document.getElementById("word").innerHTML += word.shift();
      } else {
        deletingEffect();
        return false;
      }
      timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
  }

  function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
      if (word.length > 0) {
        word.pop();
        document.getElementById("word").innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }
      timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
  }

  typingEffect();

  //scroll-to-top function
  var mybutton = document.getElementById("myBtn");
  var downButton = document.getElementById("downBtn");

  function scrollFunction() {
    if (
      document.body.scrollTop > 620 ||
      document.documentElement.scrollTop > 620
    ) {
      drift.on("ready", (api) => {
        api.widget.show();
      });
      mybutton.style.display = "block";
    } else {
      drift.on("ready", (api) => {
        api.widget.hide();
      });
      mybutton.style.display = "none";
    }

    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      downButton.style.display = "none";
    } else {
      downButton.style.display = "block";
    }
  }

  window.onscroll = function () {
    // myFunction();
    scrollFunction();
  };

  // <!-- Start of Async Drift Code -->

  ("use strict");

  !(function () {
    var t = (window.driftt = window.drift = window.driftt || []);
    if (!t.init) {
      if (t.invoked)
        return void (
          window.console &&
          console.error &&
          console.error("Drift snippet included twice.")
        );
      (t.invoked = !0),
        (t.methods = [
          "identify",
          "config",
          "track",
          "reset",
          "debug",
          "show",
          "ping",
          "page",
          "hide",
          "off",
          "on",
        ]),
        (t.factory = function (e) {
          return function () {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        }),
        t.methods.forEach(function (e) {
          t[e] = t.factory(e);
        }),
        (t.load = function (t) {
          var e = 3e5,
            n = Math.ceil(new Date() / e) * e,
            o = document.createElement("script");
          (o.type = "text/javascript"),
            (o.async = !0),
            (o.crossorigin = "anonymous"),
            (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js");
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        });
    }
  })();
  drift.SNIPPET_VERSION = "0.3.1";
  drift.load("pxxbzibkn675");
  drift.on("ready", (api) => {
    api.widget.hide();
    if (document.body.classList.contains("dark-theme")) {
      drift.config({
        backgroundColor: "#008f95",
        foregroundColor: "#000000",
      });
    } else {
      drift.config({
        backgroundColor: "#e24e42",
        foregroundColor: "#ffffff",
      });
    }
    console.log(document.body.classList.contains("dark-theme"));
  });
  // <!-- End of Async Drift Code -->

  $("#downBtnLink").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;

    if ($(hash).length) {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        50
      );
    }
  });

  const btn = document.querySelector(".theming");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
  } else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
  }

  btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    if (theme == "dark") {
      drift.config({
        backgroundColor: "#008f95",
        foregroundColor: "#000000",
      });
    } else if (theme == "light") {
      drift.config({
        backgroundColor: "#e24e42",
        foregroundColor: "#ffffff",
      });
    }
    localStorage.setItem("theme", theme);
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(
    [
      "#about-section",
      "#skills-section",
      "#work-section",
      "#project-section",
      "#contact-section",
      "#myBtn",
    ],
    {
      duration: 0.8,
      opacity: 0,
      scale: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: [
          "#about-section",
          "#skills-section",
          "#work-section",
          "#project-section",
          "#contact-section",
          "#myBtn",
        ],
        // markers: true,
        toggleActions: "restart none none none",
      },
    }
  );
});
