import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY || 'your-default-secret-key';

// Function to encrypt data
export const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    return ciphertext;
};

// Function to decrypt data
export const decryptData = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};