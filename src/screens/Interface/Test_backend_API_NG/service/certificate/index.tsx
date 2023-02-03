import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';

export const Generate_certificate = async (
  sessionUrl: string,
  Data_cgu: any,
) => {
  const res1 =
    Constant_Navigator.host_API_NG_ONE +
    // '/api/v1/session/'
    Constant_Navigator.V1 +
    sessionUrl.split('/')[4] +
    '/certificates';

  const data3 = {
    actor: Data_cgu.actor,
    authority: Data_cgu.authority,
    token: Data_cgu.token,
    ttl: 1200,
  };
  console.log(res1);
  console.log(data3);
  // console.log(data3);

  const res = await fetch(res1, {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      certignarole: '2',
      certignahash: 'ySsPUR23',
      certignauser: 'pps#test',
      Accept: 'application/json',
      DefaultLanguage: 'fr',
    },
    body: JSON.stringify(data3),
  });
  const dataA = await res.json();
  console.log('Generate Certificate ');
  console.log(dataA);
  return dataA;
};
