import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';

// get detail cgu
export const get_cgu = async (first: string) => {
  const i = first.split('/')[4];
  const res1 =
    Constant_Navigator.host_API_NG_ONE +
    // '/api/v1/ca/2/cgu?session='
    Constant_Navigator.CGU +
    i +
    '&actor=2';
  console.log(res1);
  const res = await fetch(res1, {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      certignarole: '2',
      certignahash: 'ySsPUR23',
      certignauser: 'pps#test',
      accept: 'application/json',
      DefaultLanguage: 'fr',
    },
  });

  const data = await res.json();
  console.log('----------------------------DATA GCU-------------------------');
  console.log(data);
  return data;
};
