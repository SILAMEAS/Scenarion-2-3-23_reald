import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
// approve doc
export const ApproveDoc = async (
  session: string,
  actor: string,
  pdf: string,
  otp: string,
) => {
  interface type {
    actor: string;
    documents: string[];
    otp: string;
    tag: string;
  }
  const data: type = {
    actor: actor,
    documents: [pdf],
    otp: otp,
    tag: 'legal',
  };

  try {
    const res = await fetch(
      Constant_Navigator.host_API_NG_ONE + session + '/approve-documents',
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          certignarole: '2',
          certignahash: 'ySsPUR23',
          certignauser: 'pps#test',
          accept: 'application/json',
          defaultLanguage: 'fr',
        },
        body: JSON.stringify(data),
      },
    );
    const data1 = await res.json();
    console.log(data1);
    return data1;
  } catch (error) {
    console.log(data);
    console.log(error);
  }
};
// get file
export const getfile = async () => {
  try {
    const res = await fetch(Constant_Navigator.host_API_NG + '/uploads');
    const data = await res.json();
    console.log('----------------------------------------------DATA');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// get detail file
// const get_detail_file = async (first: string) => {
//   const res = await fetch(Constant_Navigator.host_API_NG_ONE + first, {
//     method: 'GET',
//     headers: {
//       'content-type': 'application/json;charset=UTF-8',
//       certignarole: '2',
//       certignahash: 'ySsPUR23',
//       certignauser: 'pps#test',
//     },
//   });

//   const data = await res.json();
//   dispatch(setDATAofFile(data));

//   console.log(')((((((Get datail about file (((((((');
//   console.log(DATAofFile);
// };
interface type {
  urlDoc: string;
  data?: {filename: string; title: string};
  idS: string;
}
// add doc to sessioni
export const addDoc = async ({urlDoc, data, idS}: type) => {
  const res1 =
    Constant_Navigator.host_API_NG_ONE +
    '/api/v1/session/' +
    idS +
    '/documents';
  console.log('8888888888888888888888888888');
  console.log(res1);
  const data3 = {
    'file-name': data?.filename ?? 'pdf1' + '.pdf',
    'manifest-data': {},
    'user-data': {},
    abstract: 'in et ex',
    title: data?.title ?? 'txt1',
    upload: urlDoc,
  };
  console.log(data3);
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
  console.log(dataA);
  if (dataA) {
    return dataA;
  }
};
