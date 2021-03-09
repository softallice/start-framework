export function setPincode(state, payload) {
  state.pin.pincode = { ...payload };
}

export function setPindigits(state, payload) {
  state.pin.pindigits = payload;
}

export function setDisplayMode(state, payload) {
  state.displayMode = payload;
}

export function setLockState(state, payload) {
  state.pin.lockState = { ...payload };
}

export function setTimeout(state, payload) {
  state.pin.timeout = payload;
}

export function setAttempts(state, payload) {
  state.pin.attempts = payload;
}

export function setCountdown(state, payload) {
  state.pin.countdown = payload;
}

export function resetFailedTimer(state) {
  state.pin.attempts = 5;
  state.pin.countdown = 60;
}


