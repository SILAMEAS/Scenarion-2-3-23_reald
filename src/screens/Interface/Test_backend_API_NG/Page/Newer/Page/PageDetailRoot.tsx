// import {Slide, SlideProvider} from '@src/components/cheaNit_picker_file/slide';

import {RootState} from '@src/redux/Store';
import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
import {Box} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';
// import {add} from '../../../service/scenario';
// import {add} from '../../../service/scenario/service';

import {Slide, SlideProvider} from '../components/cheaNit_picker_file/slide';
import PageScenario from './PageScenario';
import PageSessionDetail from './PageSessioniInfo';

const PageDetail = ({navigation}: any) => {
  const {ForSign} = useSelector((state: RootState) => state.counter);
  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
  );
  console.log(ForSign);

  return (
    <Box
      h={'100%'}
      w={'100%'}
      bg={'black'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <SlideProvider
        initialSlide={{index: 0, isFirst: false, isLast: false, totalSteps: 5}}
      >
        <Slide
          width={['100%', '50%']}
          slideContent={[
            {
              stepName: '',
              child: <PageSessionDetail />,
            },
            {
              stepName: '',
              child: <PageScenario />,
            },
            {
              stepName: 'Session Info',
              child: <PageSessionDetail />,
            },
            {
              stepName: 'Sessions Info',
              child: <PageSessionDetail />,
            },
            {
              stepName: 'Session Info',
              child: <PageSessionDetail />,
            },
          ]}
          button={{
            rightButton: {},
          }}
          onNext={async a => {
            if (a?.index === 0) {
              // const data = await add(GetOne.doc, GetOne.actor);
              console.log('...');
            }
            if (a?.index === 1) console.log('u');
            if (a?.index === 2) console.warn('on Next 02', a);
            if (a?.index === 3) console.warn('on Next 03', a);
            if (a?.index === 4) console.warn('on Next 04', a);
          }}
          onBack={a => {
            if (a?.index === 0)
              navigation.navigate(Constant_Navigator.NewP_Sesion);
          }}
        />
      </SlideProvider>
    </Box>
  );
};

export default PageDetail;
