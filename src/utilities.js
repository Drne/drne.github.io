export function chunkArrayInGroups(arr, size) {
    const myArray = [];
    for(let i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i+size));
    }
    return myArray;
}

export function percentageBetweenPoints(p1, p2, percentage) {
    const differences = []
    p1.forEach((_, index) => {
        differences[index] = p1[index] + (p2[index] - p1[index]) * percentage
    })

    return differences
}

export function distanceBetweenPoints(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2))
}

export function avgDistancePlaneToPoint(plane, point) {
    let distance = 0
    plane.forEach((planePoint) => {
        distance += distanceBetweenPoints(planePoint, point)
    })
    return distance / 3
}
