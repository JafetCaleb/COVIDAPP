

export const getPais = async(a) => {

    const resp = await fetch("https://covid-193.p.rapidapi.com/statistics?country="+a, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "4fb98aed8fmshae80ca5c706294fp1b8db2jsn5da2ef9cc32d"
        }
    });
    const data = await resp.json();
    console.log(data.response[0]);
    const pais = data.response.map( item => {
        return{
            country: item.country,
            cases: item.cases.total,
            deaths: item.deaths.total,
            tests: item.tests.total,
            day: item.day
        }
    });
    console.log(pais);
    return pais;
}
//getGifs();