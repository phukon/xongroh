import crypto from 'crypto'

const generateOTP = (length) => {
  const chars = '0123456789' // Characters to use for OTP generation
  const charArray = chars.split('')
  const otp = []

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charArray.length)
    otp.push(charArray[randomIndex])
  }

  return otp.join('')
}

export default generateOTP
