const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const snapToArray = function(snapshot) {
    return Object.entries(snapshot).map(e =>
        Object.assign(e[1], {
            key: e[0]
        })
    );
};

const formatDate = function(date) {
    if (!date) return null;

    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
};

const parseDate = function(date) {
    if (!date) return null;

    const [day, month, year] = date.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export default {
    sleep,
    snapToArray,
    formatDate,
    parseDate
};
