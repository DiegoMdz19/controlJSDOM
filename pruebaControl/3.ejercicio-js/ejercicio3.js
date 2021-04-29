const conversion = (numero, base = 10) => {
    if (base === 10) {
        return (numero >>> 0).toString(2);
    } else if (base === 2) {
        const binaryArray = number.toString().split('').reverse();
        let decimal = 0;

        for (let i = 0; i < binaryArray.length; i++) {
            const element = binaryArray[i] * 2 ** i;
            decimal += element;
        }
        return decimal;
    }
};

console.log(conversion(10));
