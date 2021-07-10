const ValidateNumberAsString = (input: string): void => {
    const number = parseInt(input);
    if (number > 0) return;
    throw new Error("invalid number");
};

const ValidateFileName = (input: string): void => {
    if (!input || input.length === 0) throw new Error("invalid file name");
};

export { ValidateNumberAsString, ValidateFileName };
