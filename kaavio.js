
// Chart options
var chartOptions = {
    responsive: false,
    // maintainAspectRatio: true,
    title: {
        display: true,
        fontSize: 16,
        fontColor: '#000',
        text: 'Henkilökohtainen johtamisympyrä'
    },
    tooltips: {
        enabled: false
    },
    legend: {
        onClick: function (lgnd) {
            lgnd.stopPropagation();
        },
        position: 'right',
        labels: {
            fontColor: '#000'
        }
    },
    animation: {
        duration: 0
    },
    hover: {
        mode: null
    },
    scale: {
        gridLines: {
            color: 'rgba(0, 0, 0, 0.2)'
        },
        angleLines: {
            color: 'rgba(0, 0, 0, 0.2)'
        },
        ticks: {
            beginAtZero: true,
            max: 10,
            stepSize: 2,
            fontColor: '#000'
        },
        pointLabels: {
            fontColor: '#000'
        }
    }
};

var chartOptions2 = {
    responsive: false,
    // maintainAspectRatio: true,
    title: {
        display: true,
        fontSize: 16,
        fontColor: '#000',
        text: "Oma arvio verrattuna ryhmän oma-arvioihin"
    },
    tooltips: {
        enabled: false
    },
    legend: {
        onClick: function (lgnd) {
            lgnd.stopPropagation();
        },
        position: 'right',
        labels: {
            fontColor: '#000'
        }
    },
    animation: {
        duration: 0
    },
    hover: {
        mode: null
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 10,
                stepSize: 2
            }
        }]
    }
};

var chartOptions3 = {
    responsive: false,
    // maintainAspectRatio: true,
    title: {
        display: true,
        fontSize: 16,
        fontColor: '#000',
        text: "Muiden arviot verrattuna ryhmään"
    },
    tooltips: {
        enabled: false
    },
    legend: {
        onClick: function (lgnd) {
            lgnd.stopPropagation();
        },
        position: 'right',
        labels: {
            fontColor: '#000'
        }
    },
    animation: {
        duration: 0
    },
    hover: {
        mode: null
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 10,
                stepSize: 2
            }
        }]
    }
};
// Chart options


function chartRadar(chartName, chartLabels, chartOwnData, chartOthersData) {

    var chartData = {
        labels: chartLabels,
        datasets: [{
                backgroundColor: '#36a2eb',
                borderColor: '#36a2eb',
                data: chartOwnData,
                label: 'Oma arvio',
                fill: false,
                radius: 0,
                borderWidth: 1.5
            }, {
                backgroundColor: '#ed7d31',
                borderColor: '#ed7d31',
                data: chartOthersData,
                label: 'Muiden arvio',
                fill: false,
                radius: 0,
                borderWidth: 1.5
            }]
    };

    var ctx = document.getElementById(chartName);
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: chartData,
        options: chartOptions
    });
    // Chart code ends
}

function chartBar(chartName2, chartLabels, chartOwnData2, chartOthersData2) {

    // Chart data

    var chartData2 = {
        labels: chartLabels,
        datasets: [{
                backgroundColor: '#ed7d31',
                borderColor: '#ed7d31',
                data: chartOthersData2,
                label: 'Koko',
                fill: false,
                borderWidth: 1.5
            }, {
                backgroundColor: '#36a2eb',
                borderColor: '#36a2eb',
                data: chartOwnData2,
                label: 'Oma',
                fill: false,
                borderWidth: 1.5
            }]
    };

    var ctz = document.getElementById(chartName2 + "_bar");
    var myRadarChart2 = new Chart(ctz, {
        type: 'bar',
        data: chartData2,
        options: chartOptions2
    });
    // Chart code ends
}

function chartBar2(chartName3, chartLabels, chartOwnData3, chartOthersData3) {

    // Chart data

    var chartData3 = {
        labels: chartLabels,
        datasets: [{
                backgroundColor: '#ed7d31',
                borderColor: '#ed7d31',
                data: chartOthersData3,
                label: 'Koko',
                fill: false,
                borderWidth: 1.5
            }, {
                backgroundColor: '#36a2eb',
                borderColor: '#36a2eb',
                data: chartOwnData3,
                label: 'Oma',
                fill: false,
                borderWidth: 1.5
            }]
    };

    var cty = document.getElementById(chartName3 + "_bar2");
    var myRadarChart3 = new Chart(cty, {
        type: 'bar',
        data: chartData3,
        options: chartOptions3
    });
    // Chart code ends
}