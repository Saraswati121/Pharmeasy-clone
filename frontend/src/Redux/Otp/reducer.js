import { CLOSEMODAL, SHOWMAILPAGE, SHOWOTPPAGE } from "./action";

const initState = {
    showlogin: false,
    showotp: false,
    modal: false,
};

export const otpReducer = (state = initState, { type }) => {
    switch (type) {
        case SHOWMAILPAGE: {
            return {
                ...state,
                modal: true,
                showlogin:true,
                showotp:false
            };
        }
        case SHOWOTPPAGE: {
            return {
                ...state,
                modal: true,
                showlogin: false,
                showotp: true
            };
        }
        case CLOSEMODAL: {
            return {
                ...state,
                modal: false,
                showlogin: false,
                showotp: false
            };
        }
        default: {
            return state;
        }
    }
};
