import {
  setAllFileUpload,
  setDataScenario,
  setForSign,
  setOne,
} from '@src/redux/counter/CounterSlice';
import {RootState} from '@src/redux/Store';
import {
  addDoc,
  getfile,
} from '@src/screens/Interface/Test_backend_API_NG/service/document/index';
import {Secondofday} from '@src/utils/Date/CalculateDate';
import {
  Box,
  Center,
  HStack,
  Text,
  VStack,
  Pressable,
  Button,
} from 'native-base';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {add_actor} from '../../../service/actors/index';
import {add} from '../../../service/scenario';

import {MyRadioButton} from '../components/cheaNit_picker_file/my_radio_button';
import {CountdownTimer} from '../components/countdown/CountdownTimer';
// import {Countdown} from '../components/countdown/Countdown';
import ModalA from '../components/modal/Modal';
import {Convert_A_To_O} from '../utils/session/convert_A_O/Convert';
const PageSessionDetail = () => {
  const [doc, setDoc] = useState('');
  const [act, setActor] = useState('');
  console.log('------==================>>>>>>>>>>>>>>>>');
  console.log(act + '/' + doc);
  //////////////////////////////////////////////////// modal
  const [modalVisibleAct, setModalVisibleAct] = useState(false);
  // const [modalVisibleDoc, setModalVisibleDoc] = useState(false);
  const [sd, setsd] = useState(false);
  //////////////////////////////////////////////////// redux

  const dispatch = useDispatch();
  const {AllFileUpload, GetOne, ForSign} = useSelector(
    (state: RootState) => state.counter,
  );
  //////////////////////////////////////////////////// get file upload
  const getFileUpload = async () => {
    const data = await getfile();
    return dispatch(setAllFileUpload(data));
  };
  // add doc
  const Save = async (n: any) => {
    const {url} = await addDoc({urlDoc: n, idS: GetOne.id});
    console.log('//////////////////////////////////////////////////// add doc');
    dispatch(setOne({...GetOne, documents: [...GetOne.documents, url]}));
  };
  // get actors
  const AddActor = async (ILogin: string) => {
    const {url} = await add_actor({LoginA: ILogin, idS: GetOne.id});
    console.log(
      '//////////////////////////////////////////////////// get actors',
    );
    dispatch(setOne({...GetOne, actors: [...GetOne.actors, url]}));
  };

  const dataA = Convert_A_To_O(GetOne.actors);
  const dataD = Convert_A_To_O(GetOne.documents);
  const AddScenarion = async () => {
    try {
      const data = await add(
        [ForSign.Document, ForSign.Actor],
        ForSign.IdSession,
      );
      console.log('-------------------------------------------ADD scenario');
      dispatch(setDataScenario(data));
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = () => {
    dispatch(
      setForSign({Actor: act, Document: doc, IdSession: '' + GetOne.id}),
    );
  };

  useEffect(() => {}, [Save, AddActor]);
  return (
    // GetOne.expires.split('T')[0]
    <Box py={4} px={4} rounded={'lg'} w={['100%']} h={['90%', '50%']}>
      <Center>
        <Text fontWeight={'bold'}>Session : {GetOne.id}</Text>

        <Box
          borderColor={'white'}
          borderWidth={2}
          px={4}
          py={4}
          my={5}
          rounded={'md'}
          bg={'black'}
        >
          <VStack space={'1'}>
            <HStack w={'100%'} space={10}>
              <VStack>
                <Text fontWeight={'bold'}> *Actor in Session :</Text>
                {dataA?.length === 0 ? (
                  <Text> none</Text>
                ) : (
                  <MyRadioButton
                    data={dataA}
                    onChange={v => {
                      setActor(v);
                    }}
                  />
                )}
              </VStack>

              <Pressable
                onPress={() => {
                  setModalVisibleAct(true);
                }}
              >
                <Text
                  rounded={'md'}
                  px={2}
                  color={'blue.700:alpha.90'}
                  fontWeight={'bold'}
                  borderWidth={1}
                >
                  Add actor
                </Text>
              </Pressable>
            </HStack>
            <HStack space={2}>
              <VStack>
                <Text fontWeight={'bold'}> *Document in Session :</Text>
                {dataD?.length === 0 ? (
                  <Text> none</Text>
                ) : (
                  <MyRadioButton
                    data={dataD}
                    onChange={v => {
                      setDoc(v);
                    }}
                  />
                )}
              </VStack>
              <Pressable
                onPress={() => {
                  // alert('hello');

                  setsd(true);
                }}
              >
                <Text
                  rounded={'md'}
                  px={2}
                  color={'blue.700:alpha.90'}
                  fontWeight={'bold'}
                >
                  Select Doc
                </Text>
              </Pressable>
              {/* <Pressable onPress={getFileUpload}>
                <Text
                  rounded={'md'}
                  px={2}
                  color={'blue.700:alpha.90'}
                  fontWeight={'bold'}
                >
                  Refresh
                </Text>
              </Pressable> */}
            </HStack>
            {ForSign.Actor !== '' &&
            ForSign.Document !== '' &&
            ForSign.IdSession !== '' ? (
              <Button onPress={AddScenarion} borderColor={'blue.500'}>
                ADD TO SCENARIO
              </Button>
            ) : (
              <Button onPress={saveData} borderColor={'blue.500'}>
                SAVE
              </Button>
            )}
          </VStack>
        </Box>

        <CountdownTimer
          targetDate={
            new Date().getTime() + Secondofday(GetOne.expires, new Date())
          }
        />
      </Center>
      <Box>
        <ModalA
          modalVisible={modalVisibleAct}
          setModalVisible={setModalVisibleAct}
          title={`Add Actor`}
          isForm={true}
          body={AllFileUpload.uploads}
          funSave={async (s: any) => {
            await AddActor(s);
          }}
        />

        <ModalA
          modalVisible={sd}
          setModalVisible={setsd}
          title={`If don't see file please upload`}
          body={AllFileUpload.uploads}
          funSave={async (s: any) => {
            await Save(s);
          }}
        />
      </Box>
      <Text onPress={getFileUpload} position={'absolute'} right={0}>
        Refresh
      </Text>
      {/* <Dialog
        buttons={<Button>sdfsdddd</Button>}
        header={<Box>Time to rise555555555555555</Box>}
        isOpen={d.isOpen}
      /> */}
    </Box>
  );
};

export default PageSessionDetail;
