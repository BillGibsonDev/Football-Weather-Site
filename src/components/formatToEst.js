export const formatToEST = (dateString) => {
    const date = new Date(dateString);
    const options = { 
        timeZone: 'America/New_York', 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(date);
    const [time, period] = formattedTime.split(' ');

    return `${time} ${period} ET`;
}

export const formatToESTHoursOnly = (dateString) => {
    const date = new Date(dateString);
    const options = { 
        timeZone: 'America/New_York', 
        hour: 'numeric', 
        hour12: true 
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(date);
    const [time, period] = formattedTime.split(' ');

    return `${time} ${period} ET`;
}