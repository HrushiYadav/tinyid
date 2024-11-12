const ALPHABET = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
const DEFAULT_SIZE = 31;

function randomBufferGenerator(size: number): Uint8Array {
    const buffer = new Uint8Array(size);
    crypto.getRandomValues(buffer);
    return buffer;
}

export function generateTinyId(alphabet: string = ALPHABET, size: number = DEFAULT_SIZE): string {
    if (size <= 0) {
        throw new Error("Invalid size");
    }

    const buffer = randomBufferGenerator(size);
    let result = '';
    const alphabetLength = alphabet.length;

    for (let i = 0; i < size; i++) {
        const randomIndex = buffer[i] % alphabetLength;
        result += alphabet[randomIndex];
    }

    return result;
}

export function newTinyID(): string {
    return generateTinyId(ALPHABET, DEFAULT_SIZE);
}