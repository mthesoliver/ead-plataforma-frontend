function sanitizeString(input) {
    const regex = /[\/\*\;\+\=]/g;
    return input.replace(regex, '').replaceAll(' ', '-').toLocaleLowerCase();
};

function removeStyle(arr, time) {
    return setTimeout(() => {
        arr.forEach(el => {
            el.classList.add('hidden');
            console.log(el);
        });
    }, time);
}