// import {setAllSession} from '@src/redux/counter/CounterSlice';
// import {RootState} from '@src/redux/Store';
import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
import {Box, Button, Heading, HStack, ScrollView} from 'native-base';
import React, {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import CardT from '../../../components/card/CardT';
import {
  addSession,
  deleteSession,
  get_session,
} from '../../../service/sessions';

const PageSession = ({navigation}: any) => {
  // const dispatch = useDispatch();
  // const {AllSession} = useSelector((state: RootState) => state.counter);
  const [data, setdata] = useState([]);
  const get = async () => {
    setdata(await get_session());
  };
  const add = async () => {
    const data = await addSession();
    data && get();
  };

  const deletes = async (g: any) => {
    const data = await deleteSession(g);
    if (data) {
      get();
    }
  };

  React.useEffect(() => {
    get();
  }, []);

  return (
    <Box bg={'black:alpha.90'} h={'100%'}>
      <Heading color={'white'} textAlign={'center'} py={4}>
        Session
      </Heading>
      <ScrollView h={['100%', '100%', '100%']}>
        <HStack
          h={'100%'}
          flexWrap={'wrap'}
          justifyContent={'center'}
          w={'100%'}
          alignItems={'center'}
          space={1}
        >
          {data?.map((i: any) => {
            return (
              <CardT
                name={i}
                time={100}
                key={i}
                deletes={() => deletes(i)}
                navigation={navigation}
                goto={Constant_Navigator.PageDetail}
              />
            );
          })}
        </HStack>
      </ScrollView>
      <HStack justifyContent={'center'} w={'100%'} space={10} py={3}>
        <Button
          bg={'green.700'}
          onPress={() => {
            navigation.navigate(Constant_Navigator.NewP_Sesion);
            add();
          }}
        >
          Create Session
        </Button>
        <Button
          bg={'gray.700'}
          onPress={() => {
            navigation.navigate(Constant_Navigator.NewP_Upload);
          }}
        >
          Upload file
        </Button>
      </HStack>
    </Box>
  );
};

export default PageSession;
