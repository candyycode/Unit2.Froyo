// visitor is prompted for to enter a list of froyo flavors for their order
const visitorInput = prompt(
    "Please enter a list of comma-seperated froyo flavors."
)
// Input string split into an array of strings
const orderArray = visitorInput.split(",");

// @param {sortedArray[]} an array of flavors
// @returns {count} the object with counted flavors

function countOrders(orderArray) {
        const count = {};
        for (let flavor of orderArray) {
            if (count[flavor]) {
                count[flavor] += 1;
            } else {
                count[flavor] = 1;
            }
        }
            return count;
}

//Print the orders

const flavorCount = countOrders(orderArray);

const formattedData = Object.entries(flavorCount).map(([flavor, count]) => ({
    Flavor: flavor,
    Count: count,
}));

console.table(formattedData);

// Flavors - vanilla, vanilla, vanilla, strawberry, coffee, coffee