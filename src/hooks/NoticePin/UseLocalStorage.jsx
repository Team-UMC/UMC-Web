// React에서 로컬 스토리지를 사용하기 위한 커스텀 훅
import { useState } from 'react';

// Local Storage에 값 저장 & 가져오기 기능 수행
const useLocalStorage = (key, initialValue) => {
  // useState를 사용하여 state를 생성
  const [storedValue, setStoredValue] = useState(() => {
    // window.localStorage.getItem(key): key에 해당하는 값을 가져옴
    // JSON.parse(): JSON 문자열을 객체로 변환
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
      // 에러가 발생하면 initialValue를 반환
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 값을 저장하는 함수
  const setValue = (value) => {
    // value가 함수일 경우, 함수의 인자로 이전 값을 받아서 처리
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      // 에러가 발생하면 콘솔에 에러를 출력
    } catch (error) {
      console.log(error);
    }
  };

  // [현재 값, 값을 저장하는 함수]를 반환
  return [storedValue, setValue];
};

export default useLocalStorage;
