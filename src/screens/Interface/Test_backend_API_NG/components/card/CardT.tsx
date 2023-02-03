import {setOne} from '@src/redux/counter/CounterSlice';
import {RootState} from '@src/redux/Store';
// import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
import {Box, Button, Center, CloseIcon, Pressable, Text} from 'native-base';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {Countdown} from '../../Page/Newer/components/countdown/Countdown';
import {get_detail_session} from '../../service/sessions';
import {SKELETON} from '../skelaton/Skeleton';

interface type {
  name: string;
  time: number;
  navigation: any;
  goto: string;
  deletes: (g: string) => void | Promise<void> | undefined;
}

const CardT = ({name, time = 0, deletes, navigation, goto}: type) => {
  //======================================================
  const dispatch = useDispatch();
  const {GetOne} = useSelector((state: RootState) => state.counter);
  console.log(' CARDT');
  console.log(GetOne);
  console.log(time);
  //======================================================
  // const cd = Countdown(time);
  // console.log(cd);
  return (
    <Box
      w={['90%', '80%', '30%']}
      bg={'red.800'}
      rounded={10}
      mb={3}
      h={['20', '150']}
      px={4}
    >
      <Button
        position={'absolute'}
        bg={'red.900'}
        p={2}
        h={'100%'}
        py={8}
        rounded={'full'}
        right={0}
        onPress={() => {
          deletes(name);
        }}
      >
        <CloseIcon color={'white'} />
      </Button>
      {name ? (
        <Pressable
          w={'80%'}
          h={'100%'}
          onPress={async () => {
            const data = await get_detail_session(name);
            navigation.navigate(goto);
            dispatch(setOne(data));
          }}
        >
          <Center py={2} h={'100%'} w={'90%'}>
            <Text fontWeight={'extrabold'}>Session : {name.split('/')[4]}</Text>
            {/* <Text fontWeight={'extrabold'}>{cd} seconds</Text> */}
          </Center>
        </Pressable>
      ) : (
        <SKELETON />
      )}
    </Box>
  );
};

export default CardT;
