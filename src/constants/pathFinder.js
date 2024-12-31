import metroGraph from './graphBuilder';

// 🚄 Find the Shortest Path with Line Colors using BFS
export function findShortestPathWithColors(source, destination) {
    if (!metroGraph[source] || !metroGraph[destination]) {
        console.error('Source or Destination station not found in the graph!');
        return null;
    }

    const visited = new Set(); // Tracks visited stations
    const queue = [[{ station: source, line: null }]]; // Queue initialized with source path

    while (queue.length > 0) {
        const path = queue.shift(); // Dequeue the first path
        const currentNode = path[path.length - 1]; // Get the last station in the path
        const currentStation = currentNode.station;

        // Check if we've reached the destination
        if (currentStation === destination) {
            return path;
        }

        // Mark the station as visited
        if (!visited.has(currentStation)) {
            visited.add(currentStation);

            // Explore neighbors
            for (const neighbor of metroGraph[currentStation]) {
                if (!visited.has(neighbor.station)) {
                    queue.push([
                        ...path,
                        { station: neighbor.station, line: neighbor.line }
                    ]);
                }
            }
        }
    }

    // console.warn('No path found between source and destination!');
    return null;
}

// 🚄 Example Usage:
const source = 'Noida Sector 51';
const destination = 'Dwarka Sector 21';

const path = findShortestPathWithColors(source, destination);
if (path) {
    console.log(
        'Path found:',
        path.map(node => `${node.station} (${node.line || 'Start'})`).join(' → ')
    );
} else {
    console.log('No path could be found between the given stations.');
}
