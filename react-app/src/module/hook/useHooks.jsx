import CryptoJS from 'crypto-js';
export const useHashData = async (secretesData) => {
    var ciphertext =  CryptoJS.AES.encrypt(secretesData, import.meta.env.VITE_HASHKEY).toString();
    return ciphertext;
}

export const toastDispay = (info)=>{
    toast(`🤝 ${info}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
}

export const backToPages = () => {
    window.history.back();
}