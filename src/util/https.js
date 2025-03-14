// Fetching all the meals
export async function fetchAvailableMeals() {
    const response = await fetch("http://localhost:3000/meals" /*,{ 
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    } essendo già la modalità di default, non serve richiamare il metodo*/
    );
    const meals = await response.json();

    if(!response.ok){
        throw new Error("Failed to fetch places");
    }

    return meals;
}

// Adding new order
export async function addOrder(orders){
    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({orders})
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error("Failed to add the order");
    }

    return resData;
}