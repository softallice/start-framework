
export function setPincode({ commit }, payload) {
  try {
    // const salt = uuidv4().replace(/-/g, "");
    const data = {
    //   payload: encryptString(payload, salt),
    //   salt
        payload
    };
    commit("setPincode", {
      data,
      digits: payload.length
    });
    localStorage.setItem("pass-pincode",payload )
  } catch (err) {
    console.error(err);
  }
}

export function setLockState({ commit }, payload) {
  try {
    // const salt = uuidv4().replace(/-/g, "");
    const data = {
    //   payload: encryptString(payload.toString(), salt),
    //   salt
        payload
    };
    commit("setLockState", data);
  } catch (err) {
    console.error(err);
  }
}
