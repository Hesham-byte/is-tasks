import Swal from "sweetalert2";

document.querySelector("#Q3").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingThree">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseThree"
      aria-expanded="false"
    >
      Task #3
    </button>
  </h2>
  <div
    id="collapseThree"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #2 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_003_weight" class="form-label"
            >Enter your weight please</label
          >
          <input
            id="taskInput_003_weight"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-md-4">
          <label for="taskInput_003_height" class="form-label"
            >Enter your height please</label
          >
          <input
            id="taskInput_003_height"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_003"
            class="btn btn-primary float-end"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
`;

// Task #3 script
document.getElementById("taskBtn_003").addEventListener("click", function () {
  var bmi;
  const taskInput_003_weight = document.getElementById(
    "taskInput_003_weight"
  ).value;
  const taskInput_003_height = document.getElementById(
    "taskInput_003_height"
  ).value;
  if (isNaN(taskInput_003_weight) || taskInput_003_weight < 0) {
    Swal.fire({
      title: "Error !",
      text: "Please enter a valid weight.",
      icon: "error",
    });
  } else if (isNaN(taskInput_003_height) || taskInput_003_height < 0) {
    Swal.fire({
      title: "Error !",
      text: "Please enter a valid height.",
      icon: "error",
    });
  } else {
    const weight = parseFloat(taskInput_003_weight);
    const height = parseFloat(taskInput_003_height);
    bmi = weight / (height * height);
    switch (bmi.toFixed(2)) {
      case "18.5":
        Swal.fire({
          title: "Info !",
          text: `Your BMI is ${bmi.toFixed(2)} You are underweight.`,
          icon: "info",
        });
        break;
      case "25":
        Swal.fire({
          title: "Info !",
          text: `Your BMI is ${bmi.toFixed(2)} You are normal weight.`,
          icon: "info",
        });
        break;
      case "30":
        Swal.fire({
          title: "Info !",
          text: `Your BMI is ${bmi.toFixed(2)} You are over weight.`,
          icon: "info",
        });
        break;
      case "35":
        Swal.fire({
          title: "Info !",
          text: `Your BMI is ${bmi.toFixed(2)} You are over obese.`,
          icon: "info",
        });
        break;
      default:
        Swal.fire({
          title: "Info !",
          text: `Your BMI is ${bmi.toFixed(2)} You are clinically obese.`,
          icon: "info",
        });
    }
  }
});
