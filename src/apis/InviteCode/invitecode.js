import axiosInstance from 'apis/setting';

// 초대 코드 확인
export const checkInviteCode = async ({ inviteCode }) => {
  console.log('Invite Code: ', inviteCode);

  try {
    const res = await axiosInstance.post(`/invites/${inviteCode}`, {
      inviteCode: inviteCode,
    });
    if (res.data.code === 'INVITE001') {
      return false;
    } else {
      if (res.data.result.role === 'CENTER_STAFF' || 'TOTAL_STAFF') {
        return 'CENTER';
      } else {
        return 'CAMPUS';
      }
    }
  } catch (error) {
    console.log(error);
  }
};
