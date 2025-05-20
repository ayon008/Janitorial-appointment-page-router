function getDateDifference(givenDateStr) {
    const givenDate = new Date(givenDateStr);
    const currentDate = new Date();

    // Ensure we're working with past dates
    if (givenDate > currentDate) {
        return 'Date is in the future';
    }

    let years = currentDate.getFullYear() - givenDate.getFullYear();
    let months = currentDate.getMonth() - givenDate.getMonth();
    let days = currentDate.getDate() - givenDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const totalMonths = years * 12 + months;

    return `Posted${totalMonths > 0 ? ` ${totalMonths} month${totalMonths > 1 ? 's' : ''} and` : ''} ${days} day${days !== 1 ? 's' : ''} ago`;
}

export default getDateDifference;
