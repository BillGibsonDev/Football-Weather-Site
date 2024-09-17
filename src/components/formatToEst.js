import { DateTime } from "luxon";

export const formatToEST = (dateString) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const dt = DateTime.fromISO(dateString, {zone: userTimeZone});

    const estTime = dt.setZone('America/New_York');

    return `${estTime.toFormat('h:mm a')} ET`;
}

export const formatToESTHoursOnly = (dateString) => {
    const dt = DateTime.fromISO(dateString, { zone: 'utc' });

    const estTime = dt.setZone('America/New_York');

    return `${estTime.toFormat('h a')}`;
}