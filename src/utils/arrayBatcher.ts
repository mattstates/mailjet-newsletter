const arrayBatcher = <T>(collection: T[], maxSize: number): T[][] => {
    if (maxSize < 1) {
        return [collection];
    }

    const diff = collection.length / maxSize;

    if (diff < 1) {
        return [collection];
    }

    const output: T[][] = [];

    for (let i = 0; i < diff; i++) {
        output.push(collection.slice(i * maxSize, (i + 1) * maxSize));
    }

    return output;
};

export default arrayBatcher;
