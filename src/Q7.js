import Swal from "sweetalert2";

document.querySelector("#Q7").innerHTML = `
<div class="accordion-item">
  <h2 class="accordion-header" id="headingSeven">
    <button
      class="accordion-button collapsed"
      type="button" 
      data-bs-toggle="collapse"
      data-bs-target="#collapseSeven"
      aria-expanded="false"
    >
      Task #7
    </button>
  </h2>
  <div
    id="collapseSeven"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div class="accordion-body">
      <!-- Task #7 content -->
      <form class="row g-3 needs-validation">
        <div class="col-md-4">
          <label for="taskInput_007_age" class="form-label"
            >Enter your age please</label
          >
          <input
            id="taskInput_007_age"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-md-4">
          <label for="taskInput_007_day" class="form-label"
            >Enter d day</label
          >
          <input
            id="taskInput_007_day"
            type="text"
            class="form-control"
            value=""
            required
          />
        </div>
        <div class="col-12">
          <button
            id="taskBtn_007"
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
document.getElementById("taskBtn_007").addEventListener("click", function () {
  const taskInput_007_age = document.getElementById("taskInput_007_age").value;
  const taskInput_007_day = document.getElementById("taskInput_007_day").value;
  if (
    isNaN(taskInput_007_age) ||
    taskInput_007_age == "" ||
    taskInput_007_day == "" ||
    taskInput_007_age < 0 ||
    taskInput_007_age > 100
  ) {
    Swal.fire({
      title: "Error!",
      text: "Please enter valid numbers.",
    });
    return;
  }
  const age = parseInt(taskInput_007_age);
  const day = String(taskInput_007_day).toLowerCase();
  const week = [
    "sunday",
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    " friday",
    "saturday",
  ];

  if (age <= 12 && week.includes(day)) {
    switch (day) {
      case "sunday":
      case "monday":
        Swal.fire({
          title: "Info!",
          text: "Ticket Price is $10",
          icon: "info",
        });
        break;
      default:
        Swal.fire({
          title: "Info!",
          text: "Ticket Price is $7",
          icon: "info",
        });
        break;
    }
  } else if (age > 12 && week.includes(day))
    switch (day) {
      case "sunday":
      case "monday":
        Swal.fire({
          title: "Info!",
          text: "Ticket Price is $15",
          icon: "info",
        });
        break;
      default:
        Swal.fire({
          title: "Info!",
          text: "Ticket Price is $12",
          icon: "info",
        });
        break;
    }
  else {
    Swal.fire({
      title: "Error!",
      text: "Invalid day of the week.",
    });
  }
});
