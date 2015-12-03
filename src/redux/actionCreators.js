'use strict';

export function setToken(device, token) {
  return {
    type: 'SET_TOKEN',
    data: {
      device,
      token
    }
  };
}

export function sendRequest(requestName, params) {
  return {
    type: 'SEND_REQUEST',
    requestName,
    params
  }
}
