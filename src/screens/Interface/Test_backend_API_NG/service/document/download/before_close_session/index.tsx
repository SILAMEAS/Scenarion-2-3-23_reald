import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
import {download_manifest} from '../../../manifest';
import {close_session} from '../../../sessions';

// download pdf
export const Download_pdf = async (DATA: any) => {
  const id = DATA.split('/')[4];
  const did = DATA.split('/')[6];
  const res = await fetch(
    Constant_Navigator.host_API_NG_ONE +
      '/api/v1/session/' +
      id +
      '/document/' +
      did +
      '/current',
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        certignarole: '2',
        certignahash: 'ySsPUR23',
        certignauser: 'pps#test',
        accept: 'application/json',
        defaultLanguage: 'fr',
      },
    },
  );
  const data = await res.json();
  console.log('ON THE FLY --------------------------------------------');

  console.log(
    '================================URL for download============================',
  );
  const {url} = data;
  console.log(url);

  if (url) {
    const resT = await download_manifest(url);
    console.log(resT);
    if (resT) {
      close_session(id);
    }
    return resT;
  }
};
