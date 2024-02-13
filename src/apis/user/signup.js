import  axiosInstance from "apis/setting";

export const UMCSignUp = async () => {
    const res = await axiosInstance.post(`/members`);
    console.log(res);
    return res.result.memberId;
}