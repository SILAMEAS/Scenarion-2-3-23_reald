import {Box, Button} from 'native-base';
import React from 'react';
import {Dialog, useDialog} from './Newer/components/cheaNit_picker_file/dailog';
import {CountdownTimer} from './Newer/components/countdown/CountdownTimer';
// import Loading from './Newer/components/loading/Loading';
// import Countdown2 from './Newer/components/countdown/Countdown2';
// import {Countdown} from './Newer/components/countdown/Countdown';

const Page_test = () => {
  const d = useDialog();

  return (
    <Box>
      <CountdownTimer
        targetDate={new Date().getTime() + 3 * 24 * 60 * 60 * 1000}
      />
      <Button onPress={d.onOpen}>useDialog</Button>
      <Dialog
        buttons={<Button>sdfsdddd</Button>}
        header={<Box>Time to rise555555555555555</Box>}
        isOpen={d.isOpen}
      />
    </Box>
  );
};

export default Page_test;
