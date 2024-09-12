import crypto from 'crypto';

export class KeyGenerator {
    static generateKey() {
        return crypto.randomBytes(32).toString('hex'); // 256 bits
    }
}