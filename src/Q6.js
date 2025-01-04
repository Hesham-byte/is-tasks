import Swal from "sweetalert2";

document.querySelector("#Q6").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingSix">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseSix"
      aria-expanded="false"
    >
      Task #6
    </button>
  </h2>
  <div
    id="collapseSix"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #6 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_006_temp" class="form-label"
            >Enter water temp</label
          >
          <input
            id="taskInput_006_temp"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
             <div class="col-md-4">
          <label for="taskInput_006_pH" class="form-label"
            >Enter water pH</label
          >
          <input
            id="taskInput_006_pH"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_006"
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

// Task #5 script
document.getElementById("taskBtn_006").addEventListener("click", function () {
  const taskInput_006_temp =
    document.getElementById("taskInput_006_temp").value;
  const taskInput_006_pH = document.getElementById("taskInput_006_pH").value;
  if (
    isNaN(taskInput_006_temp) ||
    isNaN(taskInput_006_pH) ||
    taskInput_006_temp == "" ||
    taskInput_006_pH == "" ||
    taskInput_006_temp < -20 ||
    taskInput_006_temp > 100 ||
    taskInput_006_pH < 0 ||
    taskInput_006_pH > 14
  ) {
    Swal.fire({
      title: "Error!",
      text: "Please enter valid numbers.",
    });
    return;
  }
  const temp = parseFloat(taskInput_006_temp);
  const pH = parseFloat(taskInput_006_pH);
  if (taskInput_006_temp >= 25) {
    if (taskInput_006_pH >= 6.5 && taskInput_006_pH <= 8.5) {
      Swal.fire({
        title: "Info!",
        text: "Water is safe.",
        icon: "info",
      });
    } else {
      Swal.fire({
        title: "Info!",
        text: "Water is not safe.",
        icon: "info",
      });
    }
  } else if (taskInput_006_temp < 25) {
    if (taskInput_006_pH <= 6.5) {
      Swal.fire({
        title: "Info!",
        text: "Water is acidic.",
        icon: "info",
      });
    } else if (taskInput_006_pH >= 8.5) {
      Swal.fire({
        title: "Info!",
        text: "Water is basic.",
        icon: "info",
      });
    } else {
      Swal.fire({
        title: "Info!",
        text: "Water is neutral.",
        icon: "info",
      });
    }
  }
});
