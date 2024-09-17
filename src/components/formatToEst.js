export const formatToEST = (dateString) => {
    const options = { 
        timeZone: 'America/New_York', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };
    const weatherStartTimeEDT = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    const [time, period] = weatherStartTimeEDT.split(' ');
    const formattedTime = `${time} ${period} ET`;

    return formattedTime;
}

export const formatToESTHoursOnly = (dateString) => {
    const options = { 
        timeZone: 'America/New_York', 
        hour: 'numeric', 
        hour12: true 
    };
    const weatherStartTimeEDT = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    return weatherStartTimeEDT;
}