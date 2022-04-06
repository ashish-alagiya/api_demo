import axios from 'axios';
import {makeAPIRequest} from '../Helper/Global';
import {
  GET_ALBUMS,
  GET_COMMENTS,
  GET_DATA,
  GET_PHOTOS,
  GET_TODOS,
  GET_USER,
} from './type';

export const getConfig = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
  })
    .then(response => {
      dispatch({type: GET_DATA, payload: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getComment = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
  })
    .then(response => {
      dispatch({type: GET_COMMENTS, payload: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getExpandedComment = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL: `https://jsonplaceholder.typicode.com/posts/${request?.data?.page}/comments`,
  })
    .then(response => {
      console.log('response:---', response);
      if (response?.status === 200) {
        request.onSuccess(response);
      } else {
        request.onFail(error);
      }

      console.log(response);
    })
    .catch(error => {
      if (error) request.onFail(error);
      console.log('Error:---', error);
      console.log(error);
    });
};

export const getAlbums = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com/albums',
  })
    .then(response => {
      dispatch({type: GET_ALBUMS, payload: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getPhotos = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL:
      'https://jsonplaceholder.typicode.com/photos?_limit=5&_page=' +
      request.page,
  })
    .then(response => {
      dispatch({type: GET_PHOTOS, payload: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getTodos = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com/todos',
  })
    .then(response => {
      dispatch({type: GET_TODOS, payload: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getUser = request => async dispatch => {
  makeAPIRequest({
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com/users',
  })
    .then(response => {
      dispatch({type: GET_USER, payload: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
export const onUploadDocAws = () => {
  let formData = new FormData();
  // let headers = {
  //   'Content-Type':
  //     'multipart/form-data;boundary=------WebKitFormBoundaryE19zNvXGzXaLvS5C',
  // };
  const header = {
    'Content-Type': 'multipart/form-data',
  };
  formData.append(
    'key',
    'cache/documents/original/3ecc9c948b1ab02e1eb4eb99f1d96f49.pdf',
  );
  formData.append('Content-Disposition', 'inline; filename="sample.pdf""');
  formData.append('Content-Type', 'application/pdf');
  formData.append(
    'policy',
    'eyJleHBpcmF0aW9uIjoiMjAyMi0wMy0wMlQxMDo1MjozNVoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJkaXJlY3RzaGlmdHMtc3RhdGljIn0seyJrZXkiOiJjYWNoZS9kb2N1bWVudHMvb3JpZ2luYWwvM2VjYzljOTQ4YjFhYjAyZTFlYjRlYjk5ZjFkOTZmNDkucGRmIn0seyJDb250ZW50LURpc3Bvc2l0aW9uIjoiaW5saW5lOyBmaWxlbmFtZT1cInNhbXBsZS5wZGZcIiJ9LHsiQ29udGVudC1UeXBlIjoiYXBwbGljYXRpb24vcGRmIn0seyJ4LWFtei1jcmVkZW50aWFsIjoiQVNJQVpZUE5YSEE0WVROWVlOVUIvMjAyMjAzMDIvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotYWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsieC1hbXotZGF0ZSI6IjIwMjIwMzAyVDA5NTIzNVoifSx7IngtYW16LXNlY3VyaXR5LXRva2VuIjoiSVFvSmIzSnBaMmx1WDJWakVNTC8vLy8vLy8vLy93RWFDWFZ6TFdWaGMzUXRNU0pJTUVZQ0lRREp0UUJvZ29vc3VCamtrMjVQUUFLTTMvSlhVTXVHYmdSMXE4bTFJT3pCdWdJaEFQbmc1U1cyNUhZK25tWHlET1JrZ2JGSXdBdDdJR2ZxUDZObGRIb2NGdlFvS3ZvRENDc1FBeG9NTmpjeE1EVXdNekUxT0RNeklneEhhaFRuRVJrOHlaOVI0bTBxMXdNVG5YVXlYNG8xZG9LVHc0WkxidmRRcEhCaW4rbnFURGNLYkltOElITnBTN3NGdTkxcUxNeFNlRDZ3NkYveEJOMkpQWFZUekR6SHNMakJlaDJzOWxDaFNIOEFQcElWcGRTdzNJRjF2M3J4S0pTZlhVNEJGcmsyR1VzcWF5QVRqbE5hZUduN3U3U0NXRk42aE9lVmtuSW5SSyttaVM2NjlZM08rVEoyL3RDenhVQitvYmNNZ3psSVd1b0V6UnM0WTRtUStHTFE2eWlJZm5Mb2FoWmF2Sm9FdUJkcEp3cTYzMWFQTmNoblVNejFWUUJVbHNQT0hscGQ4QzYzVnRSYXpnd0JRKzEyV0VQdEdlNkxSVkFkbjdsTXFuYXJ2WnJnNUZqWlFCdzJqelRVK3JOTTRQK1JkQkJseDNqWVo4YldnQytKb0laM2lBVGtJZE1NUkwrRU1XQmd4MmxxNHhzT1JZdG5tV3gyTnRGRGZJUG95TmNCajE3VzhYZTN6d3FqclVqekVYVGx0RERWeGNKblR6Y1hVUkdpNHdyeGMwVjkrQ2lSOGZaSm0ySUZHdjgvdFJSc2hXMTJ6eVVzQXF4RUJYc0RHaUNYa0tkRHpaY1ppMmlLQmtDKzc5RW5uSzU2MG16MXJNM05VUHhIMnErc3l5S0crMnhpaXZvMUlHQklIN040WHZ6Z0YxaGtaa0h0eW1LdVAxb21neFQrOTd6Z25TNVZXTWhETTMzeitxQi9HVHJ3SnVaWVJqcC9UNVZkMFVZOFZuY3N2VDc3RzhENUNucm9XTGRBeGNBVDdSNzZ4N01DRnRkOUJJbjRZMk05RVcxWVVkTXdxUFg4a0FZNnBBR1BOeERSRmVndUdMN2xnZXFrbWI4RUN3ek5mUzY0SmFkTEF6SXlzUm1rYlRpNHRkNURqblZuMFJlMDRRY2V3U2dQWW1lTy9UMEt1a0lGNyttY3M2WXRkNkhRYUs1UXoyanlIY2MvMzQ3Mm1iaFIvbURzbVRqRWNoOEQwNFNnZUcwb2Zzb2xLcXZnSGdNUkZoZ1pkclNWN3dHZlhTT2dyTkd3N1RkaWNvck11WHBiYWw2cTJoUGd0YnhBUUZGS1N0R3hac3B2aG1HbUJNMG8vTUFveTV6M1lRenlPUT09In1dfQ',
  );
  formData.append('x-amz-algorithm', 'AWS4-HMAC-SHA256');
  formData.append(
    'x-amz-credential',
    'ASIAZYPNXHA4YTNYYNUB/20220302/us-east-1/s3/aws4_request',
  );
  formData.append('x-amz-date', '20220302T095235Z');
  formData.append(
    'x-amz-security-token',
    'IQoJb3JpZ2luX2VjEML//////////wEaCXVzLWVhc3QtMSJIMEYCIQDJtQBogoosuBjkk25PQAKM3/JXUMuGbgR1q8m1IOzBugIhAPng5SW25HY+nmXyDORkgbFIwAt7IGfqP6NldHocFvQoKvoDCCsQAxoMNjcxMDUwMzE1ODMzIgxHahTnERk8yZ9R4m0q1wMTnXUyX4o1doKTw4ZLbvdQpHBin+nqTDcKbIm8IHNpS7sFu91qLMxSeD6w6F/xBN2JPXVTzDzHsLjBeh2s9lChSH8APpIVpdSw3IF1v3rxKJSfXU4BFrk2GUsqayATjlNaeGn7u7SCWFN6hOeVknInRK+miS669Y3O+TJ2/tCzxUB+obcMgzlIWuoEzRs4Y4mQ+GLQ6yiIfnLoahZavJoEuBdpJwq631aPNchnUMz1VQBUlsPOHlpd8C63VtRazgwBQ+12WEPtGe6LRVAdn7lMqnarvZrg5FjZQBw2jzTU+rNM4P+RdBBlx3jYZ8bWgC+JoIZ3iATkIdMMRL+EMWBgx2lq4xsORYtnmWx2NtFDfIPoyNcBj17W8Xe3zwqjrUjzEXTltDDVxcJnTzcXURGi4wrxc0V9+CiR8fZJm2IFGv8/tRRshW12zyUsAqxEBXsDGiCXkKdDzZcZi2iKBkC+79EnnK560mz1rM3NUPxH2q+syyKG+2xiivo1IGBIH7N4XvzgF1hkZkHtymKuP1omgxT+97zgnS5VWMhDM33z+qB/GTrwJuZYRjp/T5Vd0UY8VncsvT77G8D5CnroWLdAxcAT7R76x7MCFtd9BIn4Y2M9EW1YUdMwqPX8kAY6pAGPNxDRFeguGL7lgeqkmb8ECwzNfS64JadLAzIysRmkbTi4td5DjnVn0Re04QcewSgPYmeO/T0KukIF7+mcs6Ytd6HQaK5Qz2jyHcc/3472mbhR/mDsmTjEch8D04SgeG0ofsolKqvgHgMRFhgZdrSV7wGfXSOgrNGw7TdicorMuXpbal6q2hPgtbxAQFFKStGxZspvhmGmBM0o/MAoy5z3YQzyOQ==',
  );
  formData.append(
    'x-amz-signature',
    '8799ee26b5faca39e16f917140f1c8594c6828db63ae8879e36a5a055e8f8e33',
  );
  formData.append('file', '(binary)');

  return makeAPIRequest({
    method: 'POST',
    url: `https://directshifts-static.s3.us-east-1.amazonaws.com/`,
    data: formData,
    headers: header,
  })
    .then(response => {
      console.log('response:----responsestatic.s3', response);
    })
    .catch(err => {
      console.log('err:---', err);
    });
};
