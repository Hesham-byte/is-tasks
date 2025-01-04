import Swal from "sweetalert2";

document.querySelector("#Q1").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseOne"
      aria-expanded="true"
    >
      Task #1
    </button>
  </h2>
  <div
    id="collapseOne"
    class="accordion-collapse collapse show"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #1 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_001" class="form-label"
            >Enter a number to determine whether it's even or odd</label
          >
          <input
            id="taskInput_001"
            type="number"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_001"
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

// Task #1 script
document.getElementById("taskBtn_001").addEventListener("click", function () {
  const taskInput_001 = document.getElementById("taskInput_001").value;
  if (isNaN(taskInput_001) || taskInput_001 == "") {
    Swal.fire({
      title: "Error !",
      text: "Please enter a valid number.",
      icon: "error",
    });
  } else {
    const result = parseInt(taskInput_001) % 2;
    if (result === 0) {
      Swal.fire({
        title: "Success !",
        text: "The number is even.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Success !",
        text: "The number is odd.",
        icon: "success",
      });
    }
  }
});
