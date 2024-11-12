import { generateTinyId, newTinyID } from './tinyid.js';

const id1 = newTinyID();
console.log('Generated TinyID:', id1);

const id2 = generateTinyId();
console.log('Generated TinyID with default settings:', id2);

const customId = generateTinyId('ABC123', 8);
console.log('Generated TinyID with custom alphabet and length:', customId);

export { generateTinyId, newTinyID };