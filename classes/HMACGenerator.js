import crypto from 'crypto';

export class HMACGenerator {
    static generateHMAC(key, message) {
        return crypto.createHmac('sha256', key).update(message).digest('hex');
    }
}