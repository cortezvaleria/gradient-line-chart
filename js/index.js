//this is the data to be plotted
var results = [
  {
    date: "Jan 17",
    visits: 234
  },
  {
    date: "Feb 17",
    visits: 345
  },
  {
    date: "Mar 17",
    visits: 321
  },
  {
    date: "Apr 17",
    visits: 412
  },
  {
    date: "May 17",
    visits: 435
  },
  {
    date: "June 17",
    visits: 543
  },
  {
    date: "July 17",
    visits: 567
  },
  {
    date: "Aug 17",
    visits: 480
  }
];

//this is the function to create the line chart
function drawLineChart(div_id, results, yColumn, yLabel, xAxes, firstColour, secondColour, thirdColour, fourthColour) {
  var ctx = document.getElementById(div_id).getContext("2d");
  var width = window.innerWidth || document.body.clientWidth;
  var gradientStroke = ctx.createLinearGradient(0, 0, width, 0);
  gradientStroke.addColorStop(0, firstColour);
  gradientStroke.addColorStop(0.3, secondColour);
  gradientStroke.addColorStop(0.6, thirdColour);
  gradientStroke.addColorStop(1, fourthColour);

  var labels = results.map(function(item) {
    return item[xAxes];
  });
  var data = results.map(function(item) {
    return item[yColumn];
  });

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: yLabel,
          borderColor: gradientStroke,
          pointBorderColor: gradientStroke,
          pointBackgroundColor: gradientStroke,
          pointHoverBackgroundColor: gradientStroke,
          pointHoverBorderColor: gradientStroke,
          pointBorderWidth: 8,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 4,
          data: data
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "none"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontFamily: "Roboto Mono",
              fontColor: "#556F7B",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
            },
            gridLines: {
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#556F7B",
              fontStyle: "bold",
              fontFamily: "Roboto Mono"
            },
            gridLines: {
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ]
      }
    }
  });
}


//this is to initialise the charts
function drawCharts() {
  drawLineChart(
    "lineChartBlueGreen",
    results,
    "visits",
    "Number of visits",
    "date",
    "#7C4DFF",
    "#448AFF",
    "#00BCD4",
    "#1DE9B6"
  );
  drawLineChart(
    "lineChartPinkOrange",
    results,
    "visits",
    "Number of visits",
    "date",
    "#F44336",
    "#F50057",
    "#FF4081",
    "#FF9100"
  );
}
