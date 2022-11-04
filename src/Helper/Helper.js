// import { Dimensions, Platform, PixelRatio } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const { width, height } = Dimensions.get("window")
// const scale = width / 320;

export const _getToken = async () => {
  try {
    const value = await localStorage.getItem('@authToken');
    if (value !== null) {
      return value
    }
  } catch (error) {
    console.log(error)
  }
};

export const _setToken = async (token) => {
  try {
    await localStorage.setItem('@authToken', token);
  } catch (error) {
    console.log(error)
  }
}


export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}

export function nameValidator(name) {
  if (!name) return "Name can't be empty."
  return ''
}
export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  return ''
}


// export function normalize(size) {

//   const newSize = size * scale
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize))
//   } else {
//     if (height > 700) {
//       return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
//     }
//     else {
//       return (Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2) - 0.9
//     }

//   }
// }

// export function HeaderTopSize(size) {

//   if (height > 700) {
//     return -22
//   }
//   else {
//     return -25
//   }


// }
export const UtcDateFormat = (date) => {

  var dateString = date.toISOString()
  const _date = new Date(dateString);
  const returnDate = new Date(_date.getTime() - (_date.getTimezoneOffset() * 60000)).toJSON();
  return returnDate;
}