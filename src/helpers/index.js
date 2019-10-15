const ENV_TOKEN = 'CHEFBR_OB';

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

const mutateToArray = function(snapshot) {
    return Object.entries(snapshot).map(e => Object.values(e[1]));
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

const getStorageItem = function(item) {
    let storageItem = JSON.parse(localStorage.getItem(ENV_TOKEN));
    return storageItem[item] || null;
};

const removeStorageItem = function(item) {
    let storageItem = JSON.parse(localStorage.getItem(ENV_TOKEN));
    if(storageItem[item]) storageItem[item] = null;
    localStorage.setItem(ENV_TOKEN, storageItem);
};

const setStorageItem = function(item, value) {
    let storageItem = JSON.parse(localStorage.getItem(ENV_TOKEN));
    storageItem[item] = value;
    localStorage.setItem(ENV_TOKEN, storageItem);
};

export default {
    sleep,
    snapToArray,
    formatDate,
    parseDate,
    mutateToArray,
    getStorageItem,
    removeStorageItem,
    setStorageItem
};
