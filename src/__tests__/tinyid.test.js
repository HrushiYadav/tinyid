import { generateTinyId, newTinyID } from '../tinyid.js';

const ALPHABET = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
const DEFAULT_SIZE = 31;

describe('TinyID generation', () => {
    it('should generate a TinyID with default settings', () => {
        const id = generateTinyId();
        expect(id.length).toBe(DEFAULT_SIZE);
        for (const char of id) {
            expect(ALPHABET.includes(char)).toBe(true);
        }
    });

    it('should generate a TinyID with a custom alphabet', () => {
        const customAlphabet = "abc123";
        const customSize = 8;
        const id = generateTinyId(customAlphabet, customSize);
        expect(id.length).toBe(customSize);
        for (const char of id) {
            expect(customAlphabet.includes(char)).toBe(true);
        }
    });

    it('should throw an error for invalid size', () => {
        expect(() => generateTinyId(ALPHABET, 0)).toThrow("Invalid size");
    });

    it('should generate a TinyID with default settings using newTinyID', () => {
        const id = newTinyID();
        expect(id.length).toBe(DEFAULT_SIZE);
        for (const char of id) {
            expect(ALPHABET.includes(char)).toBe(true);
        }
    });
});
