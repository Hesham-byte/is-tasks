import Swal from "sweetalert2";

document.querySelector("#Q5").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingFive">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseFive"
      aria-expanded="false"
    >
      Task #5
    </button>
  </h2>
  <div
    id="collapseFive"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #5 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_005_age" class="form-label"
            >Enter your age</label
          >
          <input
            id="taskInput_005_age"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
         <div class="col-md-4">
          <label for="taskInput_005_gpa" class="form-label"
            >Enter your GPA</label
          >
          <input
            id="taskInput_005_gpa"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-md-4">
          <label for="taskInput_005_activities" class="form-label"
            >Are you practice any activity</label
          >
          <br />
          <input
            id="taskInput_005_activities"
            type="checkbox"
            class="form-control-input"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_005"
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
document.getElementById("taskBtn_005").addEventListener("click", function () {
  const taskInput_005_age = document.getElementById("taskInput_005_age").value;
  const taskInput_005_gpa = document.getElementById("taskInput_005_gpa").value;
  const taskInput_005_activities = document.getElementById(
    "taskInput_005_activities"
  ).checked;
  if (
    isNaN(taskInput_005_age) ||
    taskInput_005_age < 0 ||
    taskInput_005_age > 100 ||
    taskInput_005_age == ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Please enter a valid age.",
      icon: "error",
    });
  } else if (
    isNaN(taskInput_005_gpa) ||
    taskInput_005_gpa < 0 ||
    taskInput_005_gpa > 4 ||
    taskInput_005_gpa == ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Please enter a valid GPA.",
      icon: "error",
    });
  } else {
    const age = parseInt(taskInput_005_age);
    const gpa = parseFloat(taskInput_005_gpa);
    if (age >= 18 && gpa >= 3.0 && taskInput_005_activities) {
      Swal.fire({
        title: "Success!",
        text: "You are eligible for a scholarship.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "You are not eligible for a scholarship.",
        icon: "error",
      });
    }
  }
});
