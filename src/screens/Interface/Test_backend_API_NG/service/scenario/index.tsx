import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';

// add scenario
export const add = async (d: any, first: any) => {
  console.log('999999999999999999999999999999999999999999999999');

  const data = {
    documents: [d[0]],
    steps: [
      {
        process: 'legal',
        steps: [d[1]],
        cardinality: 'one',
      },
      {
        process: 'cosign',
        steps: [d[1]],
        signatureType: 1,
        cardinality: 'all',
      },
    ],
    level: 4,
    format: 1,
  };
  console.log(data);
  const res = await fetch(
    Constant_Navigator.host_API_NG_ONE +
      Constant_Navigator.V1 +
      first +
      '/scenarios',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        certignarole: '2',
        certignahash: 'ySsPUR23',
        certignauser: 'pps#test',
      },
      body: JSON.stringify(data),
    },
  );
  const dataRes = await res.json();
  console.log(dataRes);

  return dataRes;
};
// get all scenario
export const getAllScenario = async (first: any) => {
  const res = await fetch(
    Constant_Navigator.host_API_NG_ONE + first + '/scenarios',
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        certignarole: '2',
        certignahash: 'ySsPUR23',
        certignauser: 'pps#test',
      },
    },
  );
  const dataRes = await res.json();

  return dataRes;
};
// active scenario
export const ActiveScenario = async (res1: any) => {
  const dataActive = {
    'manifest-data': {},
  };
  try {
    const res = await fetch(
      Constant_Navigator.host_API_NG_ONE + res1 + '/activate',
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          certignarole: '2',
          certignahash: 'ySsPUR23',
          certignauser: 'pps#test',
          Accept: 'application/json',
        },
        body: JSON.stringify(dataActive),
      },
    );
    const data = await res.json();
    const {date} = data;
    console.log('Scenario was active');
    console.log(data);
    alert('Scenario activated on ' + date.slice(0, 10));
  } catch (error) {
    console.log(error);
  }
};
