// Import Metro Line JSON files
import aquaData from '../data/metro-lines/lines/aqua.json';
import blueData from '../data/metro-lines/lines/blue.json';
import greenData from '../data/metro-lines/lines/green.json';
import magentaData from '../data/metro-lines/lines/magenta.json';
import orangeData from '../data/metro-lines/lines/orange.json';
import pinkData from '../data/metro-lines/lines/pink.json';
import redData from '../data/metro-lines/lines/red.json';
import violetData from '../data/metro-lines/lines/violet.json';
import yellowData from '../data/metro-lines/lines/yellow.json';

// Import Branch JSON files
import blueBranchData from '../data/metro-lines/branches/blue-branch.json';
import greenBranchData from '../data/metro-lines/branches/green-branch.json';
import pinkBranchData from '../data/metro-lines/branches/pink-branch.json';

// Import Station JSON files
import stationsGeneratedData from '../data/metro-stations/stations-generated.json';
import stationsData from '../data/metro-stations/stations.json';

// Graph initialization
const metroGraph = {};

// Helper function to add edges to the graph
function addEdge(lineName, station1, station2) {
    if (!metroGraph[station1]) metroGraph[station1] = [];
    if (!metroGraph[station2]) metroGraph[station2] = [];

    metroGraph[station1].push({ station: station2, line: lineName });
    metroGraph[station2].push({ station: station1, line: lineName });
}

// Process lines and branches
function processLineData(lineName, data) {
    for (let i = 0; i < data.length - 1; i++) {
        const station1 = data[i].name.english || data[i].value;
        const station2 = data[i + 1].name.english || data[i + 1].value;
        addEdge(lineName, station1, station2);
    }
}

// Process each line
const lines = {
    aqua: aquaData,
    blue: blueData,
    green: greenData,
    magenta: magentaData,
    orange: orangeData,
    pink: pinkData,
    red: redData,
    violet: violetData,
    yellow: yellowData
};

// Process each branch
const branches = {
    blue: blueBranchData,
    green: greenBranchData,
    pink: pinkBranchData
};

Object.keys(lines).forEach(line => {
    processLineData(line, lines[line]);  //line name, line data
});


Object.keys(branches).forEach(branch => {
    processLineData(branch, branches[branch]);
});

// Process multi-line stations (from stations-generated.json)
// stationsGeneratedData.forEach(station => {
//     if (station.lines && station.lines.length > 1) {
//         for (let i = 0; i < station.lines.length; i++) {
//             for (let j = i + 1; j < station.lines.length; j++) {
//                 addEdge(
//                     `${station.lines[i]}-${station.lines[j]}`,
//                     station.name.english,
//                     station.name.english
//                 );
//             }
//         }
//     }
// });

// Export the graph
export default metroGraph;
