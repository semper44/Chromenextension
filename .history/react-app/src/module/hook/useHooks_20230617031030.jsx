import CryptoJS from 'crypto-js';
export const useHashData = async (secretesData) => {
    var ciphertext =  CryptoJS.AES.encrypt(secretesData, import.meta.env.VITE_HASHKEY).toString();
    return ciphertext;
}

export const toastDispay = (info)=

export const backToPages = () => {
    window.history.back();
}