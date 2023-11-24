// type ApiData = {
//     meals: [{
//         [key: string]: string | null
//     }];
// };

// function getApiData(): Promise<ApiData> {
//     return fetch('http://www.themealdb.com/api/json/v1/1/random.php')
//         .then(response => response.json())
// }

// getApiData()
//     .then((data) => {
//         console.log(data.meals[0].idMeal)
//     })


type ApiData = {
    meals: [{
        [key: string]: string | null
    }];
};

function getApiData(): Promise<ApiData> {
    return fetch('http://api.openweathermap.org/data/2.5/weather?appid=85ed15b3e81d7e0c16510a6160d80b94&lat=0&lon=0')
        .then(response => response.json())
}

getApiData()
    .then((data) => {
        console.log(data)
    })