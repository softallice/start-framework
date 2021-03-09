
export const getPinCode = (state, getters) => {
  try {
    // const { auth } = state.settings;
    const { data, digits } = pin.pincode;
    if (data) {
      const pincode = data.payload//decryptString(data.payload, data.salt);
      return {
        pin: pincode,
        digits,
      };
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const getLockState = (state, getters) => {
  try {
    // const { auth } = state.settings;
    const { lockState } = pin;
    if (lockState) {
      const isLocked = lockState.payload//decryptString(lockState.payload, lockState.salt);
      return isLocked === "true";
    }
    return false;
  } catch (err) {
    return true;
  }
};
