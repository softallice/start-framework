export default function () {
  return {
    pin: {
      lockState: null,
      pincode: {
        data: null,
        digits: 6,
      },
      pindigits: 6,
      timeout: 30 * 60 * 1000, //milisec, default 30min
      attempts: 5,
      countdown: 60, //sec, delay 1min when auth fails
    },
    hideLowBalance: false,
    displayMode: 0,
    contacts: [],
  }
}
