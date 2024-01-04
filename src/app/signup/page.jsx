import { useDispatch, useSelector } from 'react-redux';
import { completeSignup } from '@/apis/user/login';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Page() {
    const [isModal, setIsModal] = useState < boolean > (false);
    const [nicknameInput, setNicknameInput] = useState < string > ('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userData = useSelector((state) => state.user.userData);

    const onClick = () => {
        setIsModal(true);

        completeSignup(nicknameInput).then((res) => {
            console.log('complete: ', res);

            if (res.success) {
                dispatch({ type: 'SET_LOGGED_IN', payload: true });
            }
            else {
                alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
                navigate('/');
            }
        });
    };

    useEffect(() => {
        dispatch(getMyInformation());
    }, [dispatch]);

    return (
        <div>
            <div>회원가입하기</div>

            <div>이메일</div>
            <div>{userData.email}</div>

            <div>닉네임</div>
            <input
                type='text'
                value={nicknameInput}
                onChange={(e) => setNicknameInput(e.target.value)}
                placeholder='닉네임을 입력해주세요'
            />
            <div>사용 가능한 닉네임입니다.</div>
            <div>※ 회원가입 시 설정한 닉네임은 수정할 수 없습니다.</div>

            <button onClick={onClick}> 가입 완료 </button>

        </div>
    )
}