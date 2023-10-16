export const formatToEST = (dateString) => {
    const weatherStartTimeEDT = new Date(dateString).toLocaleString('en-US', { timeZone: 'America/New_York' });
    const weatherTime = weatherStartTimeEDT; 
    const splitWeatherTime = weatherTime.split(' ');
    const weatherHourAndAbbreviation = splitWeatherTime[1].split(':');
    let time =  `${weatherHourAndAbbreviation[0]}:${weatherHourAndAbbreviation[1]} ${splitWeatherTime[2]}`;

    return time;
}