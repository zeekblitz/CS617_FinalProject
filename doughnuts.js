// data extraction
fetch('BostonPetData.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        rows.forEach(row => {
            const cols = row.split(',');

        });

    });



var chartColors = {
    red: 'rgb(255, 0, 0)',
    orange: 'rgb(255, 127, 0)',
    green: 'rgb(0, 127, 0)',
    blue: 'rgb(0, 0, 255)',
    purple: 'rgb(127, 0, 255)'
};

var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontFamily = '"Indie Flower", cursive';
Chart.defaults.global.defaultFontSize = 16;
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            data: [45, 20, 64, 32, 76],
            backgroundColor: [
                chartColors.red,
                chartColors.orange,
                chartColors.green,
                chartColors.blue,
                chartColors.purple
            ],
            borderColor: [
                chartColors.red,
                chartColors.orange,
                chartColors.green,
                chartColors.blue,
                chartColors.purple
            ],
            borderWidth: 3,
            rough: {
                roughness: 2,
                bowing: .5,
                fillStyle: 'zigzag',
                fillWeight: 0.25,
                hachureAngle: Math.floor(Math.random() * 90),
                hachureGap: 7.5
            }
        }]
    },
    plugins: [ChartRough],
    options: {
        title: {
            display: true,
            text: 'Neighborhood'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});