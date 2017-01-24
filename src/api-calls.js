import request from 'superagent';

export function getRequest(url, callback) {
  request.get(url, callback)
  .set('Accept', 'application/json');
}

export function postRequest(url, data, callback) {
  request
  .post(url, data, callback)
  .set('Accept', 'application/json');
}

export function deleteRquest(url, data, callback) {
  request
  .delete(url, data, callback)
  .set('Accept', 'application/json')
}

