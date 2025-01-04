import Swal from "sweetalert2";

document.querySelector("#Q4").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingFour">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseFour"
      aria-expanded="false"
    >
      Task #4
    </button>
  </h2>
  <div
    id="collapseFour"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #4 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_004" class="form-label"
            >Enter month number</label
          >
          <input
            id="taskInput_004"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_004"
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

// Task #4 script
document.getElementById("taskBtn_004").addEventListener("click", function () {
  const taskInput_004 = document.getElementById("taskInput_004").value;
  if (isNaN(taskInput_004) || taskInput_004 < 1 || taskInput_004 > 12) {
    Swal.fire({
      title: "Error !",
      text: "Please enter a valid month number (1-12).",
      icon: "error",
    });
  } else {
    const month = parseInt(taskInput_004);
    const daysInMonth = new Date(2022, month, 0).getDate();
    Swal.fire({
      title: "Info !",
      text: `Month ${month} has ${daysInMonth} days.`,
      icon: "info",
    });
  }
});
