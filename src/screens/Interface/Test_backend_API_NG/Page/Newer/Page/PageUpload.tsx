import WebOrMoblie from '@src/components/cheaNit_picker_file/WebOrMoblie';
import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';

import React from 'react';

const PageUpload = ({navigation}: any) => {
  return (
    <WebOrMoblie
      navigation={navigation}
      goto={Constant_Navigator.NewP_Sesion}
    />
  );
};

export default PageUpload;
