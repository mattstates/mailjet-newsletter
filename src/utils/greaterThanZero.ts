export default function greaterThanZero<T>(array: T[]): boolean {
    return Boolean(array.length > 0);
}
