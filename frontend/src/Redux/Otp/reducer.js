import { SHOWMAILPAGE, SHOWOTPPAGE } from "./action";

const initState = {
    showlogin: false,
    showotp: false,
    modalIsOpen: false
};

export const cartReducer = (state = initState, { type }) => {
    switch (type) {
        case SHOWMAILPAGE: {
            return {
                ...state,
                showlogin:true,
                showotp:false
            };
        }
        case SHOWOTPPAGE: {
            return {
                ...state,
                showlogin: false,
                showotp: true
            };
        }
        default: {
            return state;
        }
    }
};
