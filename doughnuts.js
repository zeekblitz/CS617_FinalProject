var chartColors = {
    red: 'rgb(255, 0, 0)',
    orange: 'rgb(255, 127, 0)',
    green: 'rgb(0, 127, 0)',
    blue: 'rgb(0, 0, 255)',
    purple: 'rgb(127, 0, 127)'
};

var labels = [];
var datas = [];
while (topBreeds == null){};
for (let i = 0; i < topBreeds[0].length; i++) {
    labels.push(topBreeds[0][i][0]);
    datas.push(topBreeds[0][i][1]);
}

var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontFamily = '"Indie Flower", cursive';
Chart.defaults.global.defaultFontSize = 16;
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            data: datas,
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