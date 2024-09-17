import { DateTime } from "luxon";

export const formatToEST = (dateString) => {

    const dt = DateTime.fromISO(dateString, {zone: 'America/New_York'});

    const estTime = dt.setZone('America/New_York');

    return `${estTime.toFormat('h:mm a')} ET`;
}

export const formatToESTHoursOnly = (dateString) => {
    const dt = DateTime.fromISO(dateString, { zone: 'utc' });

    const estTime = dt.setZone('America/New_York');

    return `${estTime.toFormat('h a')}`;
}