export const fibEncoder = (string) => {
    const binaryText = string.split('').map((char) => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');

    return binaryText.replace(/1/g, "🔥").replace(/0/g, "🧊");
}

export const fibDecoder = (string) => {
    string = string.replace(/🔥/g, "1").replace(/🧊/g, "0");

    let binString = '';

    string.split(' ').map(function (bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });

    return binString;
}
