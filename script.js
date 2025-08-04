document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0e00bd881c455a9ddefa89f35634fe82';
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('cityInput');
    const WeatherResult = document.getElementById('weather-result')
    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city === '') {
            WeatherResult.innerHTML = `<p>Enter a ciy name</p>`;
            return;
    
        }
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        
        
        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error('city not found');

                }
                return res.json();
            })
            .then(data => {
                const temp = data.main.temp;
                const humidity = data.main.humidity;
                const condition = data.main.condition;
                const icon = data.weather[0].icon;

                WeatherResult.innerHTML = `
                < h2 >${data.name},${data.sys.country}</h2 >
                    <img src="https://openweathermap.org/img/wn/${icon}10d@2x.png" alt="${condition}" />
                    <p><strong>Temperature:</strong></p>
        })
                `
                    
        })


    })


    
});
