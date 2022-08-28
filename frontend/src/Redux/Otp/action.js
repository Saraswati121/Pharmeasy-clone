export const SHOWMAILPAGE = "SHOWMAILPAGE";
export const SHOWOTPPAGE = "SHOWOTPPAGE";


export const showLoginPage = (dispatch) => {
    dispatch({ type: SHOWMAILPAGE })
}

export const showOtpPage = (dispatch) => {
    dispatch({ type: SHOWOTPPAGE })
}

