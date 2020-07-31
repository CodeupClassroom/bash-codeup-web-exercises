var i = 1;

while (i < 65536) {
    i += i;
    console.log(i);
}

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var cones = Math.floor(Math.random() * 5) + 1;
    // decide if we have enough
    if (cones <= allCones) {
        //sell some cones
        console.log(cones + " cones sold...");
        allCones -= cones;
    } else {
        console.log("Cannot sell you " + cones + " cones I only have " + allCones + "...");
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");