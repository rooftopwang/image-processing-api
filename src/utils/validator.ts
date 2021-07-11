const ValidateNumberAsString = (input: string): void => {
    const number = parseInt(input);
    if (number > 0) return;
    throw new Error("invalid number");
};

const ValidateFileName = (input: string): string => {
    if (!input || input.length === 0) throw new Error("invalid file name");
    const positionOfDot = input.indexOf(".");

    const file = input.substring(0, positionOfDot);
    const extension = input.substring(positionOfDot, input.length);

    if (positionOfDot === -1 || file.length === 0)
        throw new Error("invalid file name");

    if (extension !== ".jpg") throw new Error("invalid file extension");

    return file;
};

export { ValidateNumberAsString, ValidateFileName };
