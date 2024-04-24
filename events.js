var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var options = {
    chart: {
      type: 'line'
    },
    stroke: {
        curve: 'smooth',
      },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

fetch('https://api.sense.city/statistics/issue?city=patras')
    .then(response => response.json())
    .then(results => {
        console.log(results[0].loc.type);
        console.log(results[0].loc.coordinates);
    })
    .catch(error => console.error('Error:', error));
