const toggleButtons = document.querySelectorAll(".toggle-button");
const toggleStates = document.querySelectorAll(".toggle-state");

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("on");

    const outputNumber = index + 1;
    const data = toggleButton.classList.contains("on") ? 1.0 : 0.0;

    toggleStates[index].textContent = toggleButton.classList.contains("on")
      ? "ON"
      : "OFF";

    try {
      sendData(outputNumber, data);
    } catch (error) {
      console.log(error);
      alert("Error sending data. Please try again.");
    }
  });
});

function sendData(outputNumber, data) {
  const url = "/dodata";

  const digitalOutputs = Array.from(toggleButtons).map((button) =>
    button.classList.contains("on") ? "1.00" : "0.00"
  );
  const body = { Digital_Output_Values: digitalOutputs.join(",") };

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      console.log("Data sent successfully.");
      return Promise.resolve();
    } else {
      throw new Error("Error sending data.");
    }
  });
}

// Create a new Chart.js chart for the first chart
const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 1",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the second chart
const ctx2 = document.getElementById("myChart2").getContext("2d");
const chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 2",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the third chart
// Create a new Chart.js chart for the third chart
const ctx3 = document.getElementById("myChart3").getContext("2d");
const chart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 3",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {

     
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the fourth chart
const ctx4 = document.getElementById("myChart4").getContext("2d");
const chart4 = new Chart(ctx4, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 4",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the fifth  chart
const ctx5 = document.getElementById("myChart5").getContext("2d");
const chart5 = new Chart(ctx5, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 5",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the sixth chart
const ctx6 = document.getElementById("myChart6").getContext("2d");
const chart6 = new Chart(ctx6, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 6",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the 7 chart
const ctx7 = document.getElementById("myChart7").getContext("2d");
const chart7 = new Chart(ctx7, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 7",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the 8 chart
const ctx8 = document.getElementById("myChart8").getContext("2d");
const chart8 = new Chart(ctx8, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 8",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});
// Create a new Chart.js chart for the 9 chart
const ctx9 = document.getElementById("myChart9").getContext("2d");
const chart9 = new Chart(ctx9, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 9",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the 10 chart
const ctx10 = document.getElementById("myChart10").getContext("2d");
const chart10 = new Chart(ctx10, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 10",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the 11 chart
const ctx11 = document.getElementById("myChart11").getContext("2d");
const chart11 = new Chart(ctx11, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 11",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Create a new Chart.js chart for the 12 chart
const ctx12 = document.getElementById("myChart12").getContext("2d");
const chart12 = new Chart(ctx12, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mux Data 12",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        pointRadius: 0, // disable point radius to remove animation
      },
    ],
  },
  options: {
    animation: false, // disable chart animation
    scales: {
     y: {
        display: true,
        title: {
          display: true,
          text: 'value'
        }
      },
    },
  },
});

// Fetching data from url


// Function to update the charts with new data
let muxArray0 = []; // channel 0
let muxArray1 = []; // channel 1
let muxArray2 = []; // channel 2
let muxArray3 = []; // channel 3
let muxArray4 = []; // channel 4
let muxArray5 = []; // channel 5
let muxArray6 = []; // channel 6
let muxArray7 = []; // channel 7
let muxArray8 = []; // channel 8
let muxArray9 = []; // channel 9
let muxArray10 = []; // channel 10
let muxArray11 = []; // channel 11
let muxArray12 = []; // channel 12

setInterval(function updateCharts() {
  // let url = "http://170.187.250.138/data";

  fetch("/data/")
    .then((response) => response.json())
    .then((data) => {
      data.map((myData) => {
        if (myData.CHANNEL == 8) {
          // channel 0 logic
          muxArray0.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 9) {
          // channel 1 logic
          muxArray1.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 10) {
          // channel 1 logic
          muxArray2.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 11) {
          // channel 1 logic
          muxArray3.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 4) {
          // channel 1 logic
          muxArray4.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 5) {
          // channel 1 logic
          muxArray5.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 6) {
          // channel 1 logic
          muxArray6.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 7) {
          // channel 1 logic
          muxArray7.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 0) {
          // channel 1 logic
          muxArray8.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 1) {
          // channel 1 logic
          muxArray9.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 2) {
          // channel 1 logic
          muxArray10.push(Number(myData.VALUE));
        } else if (myData.CHANNEL == 3) {
          // channel 1 logic
          muxArray11.push(Number(myData.VALUE));
        }
      });

      let muxData = [];
      let muxData2 = [];
      let muxData3 = [];
      let muxData4 = [];
      let muxData5 = [];
      let muxData6 = [];
      let muxData7 = [];
      let muxData8 = [];
      let muxData9 = [];
      let muxData10 = [];
      let muxData11 = [];
      let muxData12 = [];

      // Iterating through mux array where we are storing dataa to display to chart
      muxArray0.map((x) => {
        muxData.push(x);
      });

      muxArray1.map((x) => {
        muxData2.push(x);
      });

      muxArray2.map((x) => {
        muxData3.push(x);
      });

      muxArray3.map((x) => {
        muxData4.push(x);
      });

      muxArray4.map((x) => {
        muxData5.push(x);
      });

      muxArray5.map((x) => {
        muxData6.push(x);
      });

      muxArray6.map((x) => {
        muxData7.push(x);
      });

      muxArray7.map((x) => {
        muxData8.push(x);
      });

      muxArray8.map((x) => {
        muxData9.push(x);
      });

      muxArray9.map((x) => {
        muxData10.push(x);
      });

      muxArray10.map((x) => {
        muxData11.push(x);
      });

      muxArray11.map((x) => {
        muxData12.push(x);
      });

      const now = new Date();
      const numPointsToUpdate = 10;
      const labels = Array.from(Array(numPointsToUpdate), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData2Last = muxData2.slice(-numPointsToUpdate);

      chart.data.labels = labels;
      chart.data.datasets[0].data = muxData2Last;
      chart.update();
      // Update chart2 data

      const labels2 = Array.from(Array(numPointsToUpdate), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData2Last8 = muxData2.slice(-numPointsToUpdate);

      chart2.data.labels = labels2;
      chart2.data.datasets[0].data = muxData2Last8;
      chart2.update();

      // Update chart3 data
      const numPointsToUpdate1 = 10;
      const labels3 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last1 = muxData2.slice(-numPointsToUpdate);

      chart3.data.labels = labels3;
      chart3.data.datasets[0].data = muxData3Last1;
      chart3.update();
      // Update chart4 data
      const labels4 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last2 = muxData2.slice(-numPointsToUpdate);

      chart4.data.labels = labels4;
      chart4.data.datasets[0].data = muxData3Last2;
      chart4.update();

      // Update chart5 data
      const labels5 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last5 = muxData5.slice(-numPointsToUpdate);

      chart5.data.labels = labels5;
      chart5.data.datasets[0].data = muxData3Last5;
      chart5.update();

      // Update chart6 data
      const labels6 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last6 = muxData6.slice(-numPointsToUpdate);

      chart6.data.labels = labels6;
      chart6.data.datasets[0].data = muxData3Last6;
      chart6.update();

      // Update chart 7 data
      const labels7 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last7 = muxData7.slice(-numPointsToUpdate);

      chart7.data.labels = labels7;
      chart7.data.datasets[0].data = muxData3Last7;
      chart7.update();
      // Update chart 8 data
      const labels8 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last8 = muxData8.slice(-numPointsToUpdate);

      chart8.data.labels = labels8;
      chart8.data.datasets[0].data = muxData3Last8;
      chart8.update();

      // Update chart 9 data

      const labels9 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last9 = muxData9.slice(-numPointsToUpdate);

      chart9.data.labels = labels9;
      chart9.data.datasets[0].data = muxData3Last9;
      chart9.update();
      // Update chart 10 data

      const labels10 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last10 = muxData10.slice(-numPointsToUpdate);

      chart10.data.labels = labels10;
      chart10.data.datasets[0].data = muxData3Last10;
      chart10.update();

      // Update chart 11 data

      const labels11 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last11 = muxData11.slice(-numPointsToUpdate);

      chart11.data.labels = labels11;
      chart11.data.datasets[0].data = muxData3Last11;
      chart11.update();

      // Update chart 12 data

      const labels12 = Array.from(Array(numPointsToUpdate1), (_, i) => {
        const seconds = now.getSeconds() - numPointsToUpdate1 + i + 1;
        const minutes = now.getMinutes();
        return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
      });
      const muxData3Last12 = muxData12.slice(-numPointsToUpdate);

      chart12.data.labels = labels12;
      chart12.data.datasets[0].data = muxData3Last12;
      chart12.update();

      // Update the chart info with the latest data
      document.getElementById("chartInfo").innerHTML =
        "Current data: " + muxData[muxData.length - 1];
      document.getElementById("chartInfo2").innerHTML =
        "Current data: " + muxData2[muxData2.length - 1];
      document.getElementById("chartInfo3").innerHTML =
        "Current data: " + muxData3[muxData3.length - 1];
      document.getElementById("chartInfo4").innerHTML =
        "Current data: " + muxData4[muxData4.length - 1];
      document.getElementById("chartInfo5").innerHTML =
        "Current data: " + muxData5[muxData5.length - 1];
      document.getElementById("chartInfo6").innerHTML =
        "Current data: " + muxData6[muxData6.length - 1];
      document.getElementById("chartInfo7").innerHTML =
        "Current data: " + muxData7[muxData7.length - 1];
      document.getElementById("chartInfo8").innerHTML =
        "Current data: " + muxData8[muxData8.length - 1];
      document.getElementById("chartInfo9").innerHTML =
        "Current data: " + muxData9[muxData9.length - 1];
      document.getElementById("chartInfo10").innerHTML =
        "Current data: " + muxData10[muxData10.length - 1];
      document.getElementById("chartInfo11").innerHTML =
        "Current data: " + muxData11[muxData11.length - 1];
      document.getElementById("chartInfo12").innerHTML =
        "Current data: " + muxData12[muxData12.length - 1];
    });
}, 1000); // Update the charts every 1 seconds

myChart.style.display = "none";
myChart2.style.display = "none";
myChart3.style.display = "none";
myChart4.style.display = "none";

myChart5.style.display = "none";
myChart6.style.display = "none";
myChart7.style.display = "none";
myChart8.style.display = "none";

chartInfo.style.display = "none";
chartInfo2.style.display = "none";
chartInfo3.style.display = "none";
chartInfo4.style.display = "none";

chartInfo5.style.display = "none";
chartInfo6.style.display = "none";
chartInfo7.style.display = "none";
chartInfo8.style.display = "none";

document.querySelector(".chart-container9").style.display = "none";
document.querySelector(".chart-container10").style.display = "none";

var toggleWrapper1 = document.querySelector(".gayab");
toggleWrapper1.style.display = "none";

var showme1 = document.querySelector(".out");

showme1.style.display = "none";

// Define the click handler for the ANALOG I/P(5V) button
function handleClick() {
  // Show the appropriate charts
  myChart.style.display = "block";
  myChart2.style.display = "block";
  myChart3.style.display = "block";
  myChart4.style.display = "block";

  chartInfo.style.display = "block";
  chartInfo2.style.display = "block";
  chartInfo3.style.display = "block";
  chartInfo4.style.display = "block";

  // Hide the other charts
  toggleWrapper1.style.display = "none";
  showme1.style.display = "none";

  myChart5.style.display = "none";
  myChart6.style.display = "none";
  myChart7.style.display = "none";
  myChart8.style.display = "none";

  chartInfo5.style.display = "none";
  chartInfo6.style.display = "none";
  chartInfo7.style.display = "none";
  chartInfo8.style.display = "none";

  document.querySelector(".chart-container9").style.display = "none";
  document.querySelector(".chart-container10").style.display = "none";
}

// Define the click handler for the ISO.DIGITAL I/P button
function handleClick1() {
  // Show the appropriate charts
  myChart5.style.display = "block";
  myChart6.style.display = "block";
  myChart7.style.display = "block";
  myChart8.style.display = "block";

  chartInfo5.style.display = "block";
  chartInfo6.style.display = "block";
  chartInfo7.style.display = "block";
  chartInfo8.style.display = "block";

  // power on off icon
  toggleWrapper1.style.display = "none";
  showme1.style.display = "none";

  // Hide the other charts
  myChart.style.display = "none";
  myChart2.style.display = "none";
  myChart3.style.display = "none";
  myChart4.style.display = "none";

  chartInfo.style.display = "none";
  chartInfo2.style.display = "none";
  chartInfo3.style.display = "none";
  chartInfo4.style.display = "none";

  document.querySelector(".chart-container9").style.display = "none";
  document.querySelector(".chart-container10").style.display = "none";
}

function handleClick4() {
  fetch("/data");
  myChart.style.display = "none";
  myChart2.style.display = "none";
  myChart3.style.display = "none";
  myChart4.style.display = "none";

  myChart5.style.display = "none";
  myChart6.style.display = "none";
  myChart7.style.display = "none";
  myChart8.style.display = "none";

  chartInfo.style.display = "none";
  chartInfo2.style.display = "none";
  chartInfo3.style.display = "none";
  chartInfo4.style.display = "none";

  chartInfo5.style.display = "none";
  chartInfo6.style.display = "none";
  chartInfo7.style.display = "none";
  chartInfo8.style.display = "none";

  document.querySelector(".chart-container9").style.display = "none";
  document.querySelector(".chart-container10").style.display = "none";

  toggleWrapper1.style.display = "none";
  showme1.style.display = "block";
}

// Attach the click handlers to the buttons
const analogButton = document.querySelector("#sidebar button.turu1");
analogButton.addEventListener("click", handleClick);

const digitalButton = document.querySelector("#sidebar button.turu2");
digitalButton.addEventListener("click", handleClick1);

const outputButton = document.querySelector("#sidebar button.turu4");
outputButton.addEventListener("click", handleClick4);

function toggleDarkMode() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-mode");
}
function handleClick2() {
  // Show the appropriate charts
  document.querySelector(".chart-container9").style.display = "flex";
  document.querySelector(".chart-container10").style.display = "flex";
  // Hide the other charts
  toggleWrapper1.style.display = "none";
  showme1.style.display = "none";

  myChart.style.display = "none";
  myChart2.style.display = "none";
  myChart3.style.display = "none";
  myChart4.style.display = "none";

  myChart5.style.display = "none";
  myChart6.style.display = "none";
  myChart7.style.display = "none";
  myChart8.style.display = "none";

  chartInfo5.style.display = "none";
  chartInfo6.style.display = "none";
  chartInfo7.style.display = "none";
  chartInfo8.style.display = "none";
}
