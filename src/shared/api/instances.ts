import ky from 'ky';

export const publicApi = ky.extend({
  prefixUrl: 'https://romanov9617.github.io/'
});

export const privateApi = ky.extend({
  prefixUrl: 'https://romanov9617.github.io/',
  credentials: 'include'
});
