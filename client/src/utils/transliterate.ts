export default function transliterateToRussianWithKeyCode(text: string) {
    return text.replace(/[a-z]/gi, function(match: any) {
        const charCode = match.toLowerCase().charCodeAt(0);
        let russianCharCode:any;
        if (charCode >= 97 && charCode <= 122) { // для строчных букв
            russianCharCode = charCode - 32; // смещение на 32 кода клавиши
        }
        console.log(String.fromCharCode(russianCharCode))
        return russianCharCode ? String.fromCharCode(russianCharCode) : match;
    });
}
