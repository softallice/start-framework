import * as Keychain from 'react-native-keychain';

// 데이터 저장
const setItem = async (key, value) => {
  await Keychain.setInternetCredentials(
    key,
    key,
    value
  )
}

// 데이터 조회
const getItem = async (key) => {
  const result = await Keychain.getInternetCredentials(key);
  return result.password;
}

export default {
  setItem,
  getItem
}