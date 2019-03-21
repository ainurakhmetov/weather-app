const TimeConverter = timestamp => {
    const a = new Date(timestamp * 1000);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const newDate = `${a.getDate()} ${months[a.getMonth()]} ${a.getFullYear()}`;
    return newDate;
};

export default TimeConverter;
