function sanitizeString(input) {
    const regex = /[\/\*\;\+\=]/g;
    return input.replace(regex, '').replaceAll(' ', '-').toLocaleLowerCase();
};

function sanitizeStringToNumbers(input) {
    const regex = /\D/g;
    return input.replace(regex, '');
}

function removeStyle(arr, time) {
    return setTimeout(() => {
        arr.forEach(el => {
            el.classList.add('hidden');
            console.log(el);
        });
    }, time);
}