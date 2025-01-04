import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/sweetalert2/dist/sweetalert2.min.css";
import "../src/style.css";

document.addEventListener("DOMContentLoaded", () => {
  import("../node_modules/bootstrap/dist/js/bootstrap.min");
  import("../node_modules/sweetalert2/dist/sweetalert2.min");
  import("./Q1.js");
  import("./Q2.js");
  import("./Q4.js");
  import("./Q5.js");
  import("./Q6.js");
  import("./Q7.js");

  document.querySelector("#app").innerHTML = `
    <div class="container">
      <header id="header">
        <h1 class="text-center">JavaScript Tasks</h1>
      </header>
      <div class="accordion" id="accordionExample">
        <div id="Q1"></div>
        <div id="Q2"></div>
        <div id="Q3"></div>
        <div id="Q4"></div>
        <div id="Q5"></div>
        <div id="Q6"></div>
        <div id="Q7"></div>
      </div>
    </div>
  `;
});
