export const generateRandomPassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitChars = '0123456789';
    const specialChars = '@$!%*?&';
    const allChars = lowercaseChars + uppercaseChars + digitChars + specialChars;
    function getRandomChar(chars) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        return chars[randomIndex];
    }
    let password = [
        getRandomChar(lowercaseChars),
        getRandomChar(uppercaseChars),
        getRandomChar(digitChars),
        getRandomChar(specialChars)
    ];
    while (password.length < 8) {
        password.push(getRandomChar(allChars));
    }
    password = password.sort(() => Math.random() - 0.5);
    return password.join('');
}
