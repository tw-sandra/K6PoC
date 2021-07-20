import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
    stages: [
       { duration: '5s', target: 20 },
     ],
};


export default function () {
  let res =  http.get('https://test.k6.io');
  check(res, {
            'is status 200': (r) => r.status === 201,
            });
  sleep(1);
}