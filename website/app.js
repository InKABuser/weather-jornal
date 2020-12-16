// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&units=metric&appid=9b75b5f8aac64d82640601a586d96385';
// date 
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', PerformAction);

/* Function called by event listener */
function PerformAction (e) {
    // data from user 
    const zipCode = document.getElementById('zip').value;
    const userContent = document.getElementById('feelings').value;
    //get data from wep api    
    weatherData(baseURL, zipCode, apiKey)
        .then(function(data){
            //post data
            postData('/add', {date: newDate, temp: data.main.temp, userContent})
            //add new data to ui
            .then(
            updateUI()
            )
        });
    };
/* Function to GET Web API Data*/
const weatherData = async(baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL+zipCode+apiKey)
    try {
        const data = await res.json();
        console.log(data);
        return data;
        
    } catch(error) {
        console.log('error', error);
    };
};

/* Function to POST data */
const postData = async(url = '', data = {}) => {
    const req = await fetch (url, {
        method: 'POST',
        Credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await req.json();
        return newData
    } catch(error) {
        console.log("error", error);
    }
}

/* Function to GET Project Data */
const updateUI = async () => {
    const req = await fetch ('/all')
    try {
        const allData = await req.json();
       console.log(allData);
       document.getElementById('date').innerHTML = allData.date;
       document.getElementById('temp').innerHTML = allData.temp;
       document.getElementById('content').innerHTML = allData.userContent;
    } catch(error) {
        console.log("error",error);
    };
};