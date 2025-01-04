import Swal from "sweetalert2";

document.querySelector("#Q2").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingTwo">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseTwo"
      aria-expanded="false"
    >
      Task #2
    </button>
  </h2>
  <div
    id="collapseTwo"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #2 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_002" class="form-label"
            >Enter a year to determine whether it's leap year or not</label
          >
          <input
            id="taskInput_002"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_002"
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

// Task #2 script
document.getElementById("taskBtn_002").addEventListener("click", function () {
  const taskInput_002 = document.getElementById("taskInput_002").value;
  if (isNaN(taskInput_002) || taskInput_002 == "") {
    Swal.fire({
      title: "Error !",
      text: "Please enter a valid year.",
      icon: "error",
    });
  } else {
    const year = parseInt(taskInput_002);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      Swal.fire({
        title: "Info !",
        text: `${taskInput_002} is a leap year.`,
        icon: "info",
      });
    } else {
      Swal.fire({
        title: "Info !",
        text: `${taskInput_002} is not a leap year.`,
        icon: "info",
      });
    }
  }
});
