var file = 'BostonPetData.csv';
var topBreeds = [];
d3.csv(file).then(function (dataPoints) {
    // sort the data by neighborhood
    byNeighborhood = dataPoints.slice().sort((a, b) => d3.ascending(a.neighborhood, b.neighborhood));

    // separate the data into arrays by neighborhood
    var neighborhoods = [[]];
    var currentNeighborhood = byNeighborhood[0].neighborhood;
    for (let i = 0; i < byNeighborhood.length; i++) {
        if (byNeighborhood[i].neighborhood == currentNeighborhood) {
            neighborhoods[neighborhoods.length - 1].push(byNeighborhood[i]);
        } else {
            neighborhoods.push([]);
            currentNeighborhood = byNeighborhood[i].neighborhood;
            neighborhoods[neighborhoods.length - 1].push(byNeighborhood[i]);
        }
    }

    // determine the top 5 breeds for each neighborhood

    for (let i = 0; i < neighborhoods.length; i++) {
        var breedCounts = {};
        for (let j = 0; j < neighborhoods[i].length; j++) {
            if (neighborhoods[i][j].Breed in breedCounts) {
                breedCounts[neighborhoods[i][j].Breed]++;
            } else {
                breedCounts[neighborhoods[i][j].Breed] = 1;
            }
        }
        var sortable = [];
        for (var breed in breedCounts) {
            sortable.push([breed, breedCounts[breed]]);
        }
        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });
        topBreeds.push(sortable.slice(0, 5));
    }

    console.log(topBreeds[0]);
});