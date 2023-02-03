// import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';

import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';

//add sign doc
export const sign_doc = async (da: any) => {
  console.log('service');

  const data = {
    actor: da.ac,
    documents: [da.doc],
    certificate: da.ce,
    tag: 'cosign',
  };
  const id = da.ce.split('/')[4];
  console.log(data);
  console.log('==================== Waiting =============================');

  const res = await fetch(
    Constant_Navigator.host_API_NG_ONE +
      '/api/v1/session/' +
      id +
      '/sign-documents',
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        certignarole: '2',
        certignahash: 'ySsPUR23',
        certignauser: 'pps#test',
        Accept: 'application/json',
        DefaultLanguage: 'fr',
      },
      body: JSON.stringify(data),
    },
  );
  const dataRes = await res.json();
  console.log('singature---------------');
  console.log(dataRes);

  return dataRes;
};
