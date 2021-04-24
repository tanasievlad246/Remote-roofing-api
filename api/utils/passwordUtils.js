import crypto from 'crypto';

/**
 * 
 * @param {string} password plain text password 
 * @returns {object} object with the hash and salt
 */
export function hashPassword(password) {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt,
        hash
    }
}

/**
 * 
 * @param {string} password string of request password
 * @param {string} hash string of the hashed password that was sent for validation
 * @param {string} salt string of the salt that was sent for validation
 * @returns {boolean} true if the passwords match false otherwise
 */
export function validatePassword(password, hash, salt) {
    const subject = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === subject;
}
