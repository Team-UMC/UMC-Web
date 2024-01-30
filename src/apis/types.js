export const TokenReturnType = {
    success: false,
    user: {
        user_index: 0,
        newUser: false,
        email: '',
        nickname: '',
        profileImg: '',
    },
    access_token: '',
    refresh_token: '',
};

export const RefreshReturnType = {
    success: false,
    access_token: '',
    refresh_token: '',
};

export const LogoutReturnType = {
    message: '',
};
