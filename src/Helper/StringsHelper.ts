export const sanitizeString = (input: string): string => {
    const regex = /[\/\*\;\+\=]/g; // Regex que captura os caracteres: / * ; + =
    return input.replace(regex, '').replace(' ', '-').toLocaleLowerCase(); // Substitui os caracteres por ''
};