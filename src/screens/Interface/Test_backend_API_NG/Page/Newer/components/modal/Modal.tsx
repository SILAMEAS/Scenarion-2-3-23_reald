import React, {useState} from 'react';
import {Button, Modal, ScrollView} from 'native-base';
import Loading from '../loading/Loading';
// import SelectT from '@src/screens/Interface/Test_backend_API_NG/components/select/Select';
import {MySelect} from '../cheaNit_picker_file/select';
import {Convert_A_To_O} from '../../utils/session/convert_A_O/Convert';
import {MyForm} from '../cheaNit_picker_file/my_form';
// import {$ok} from '../../utils/commons';
// import {Convert_O_To_A} from '../../utils/session/convert{[]}To[{}]/Convert';
interface type {
  modalVisible: boolean;
  setModalVisible: any;
  title?: string;
  body?: any;
  save?: string;
  cancel?: string;
  funSave?: any;
  isForm?: boolean;
}
const ModalA = ({
  funSave,
  modalVisible,
  setModalVisible,
  title = 'Header',
  body,
  save = 'save',
  cancel = 'cancel',
  isForm = false,
}: type) => {
  const [selecValue, setselecValue] = useState('');
  console.log(body);
  const data = Convert_A_To_O(body);
  console.log('--------------DATA');
  console.log(data);
  // console.log(data);
  return (
    <>
      <Modal isOpen={modalVisible} size={'xl'}>
        <Modal.Content maxH="80%" maxW="100%" w={'100%'}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Body>
            {isForm === true ? (
              <MyForm
                form={{width: '100%', height: '100%', space: 7}}
                input={[
                  {
                    isRequired: true,
                    label: 'Create Login Input',
                    name: 'firstname',
                    color: 'black',
                    defaultValue: '',
                    placeholder: 'Your first name here...',
                    rules: {
                      required: 'Field is required',
                      validate: (value: string) => {
                        return value.length < 3
                          ? 'firstname must has more than 3 charactors'
                          : undefined;
                      },
                    },
                  },
                ]}
                button={{
                  container: {},
                  buttons: [
                    {
                      text: 'Cancel',
                      type: 'button',
                      onPress: () => {
                        setModalVisible(false);
                      },
                    },
                    {
                      text: 'Save',
                      type: 'submit',
                      onPress: dataobj => {
                        funSave(dataobj.firstname);
                        setModalVisible(false);
                      },
                    },
                  ],
                }}
              />
            ) : (
              <ScrollView>
                {body.lenght !== 0 ? (
                  <>
                    <MySelect
                      labelProp="text"
                      data={data}
                      selectedValue={data[0]?.value}
                      onValueChange={v => {
                        setselecValue(v);
                      }}
                    />
                  </>
                ) : (
                  <Loading title="Loading Data" />
                )}
              </ScrollView>
            )}
          </Modal.Body>
          <Modal.Footer>
            {!isForm && (
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  {cancel}
                </Button>
                <Button
                  onPress={() => {
                    setModalVisible(false);
                    funSave(selecValue);
                  }}
                >
                  {save}
                </Button>
              </Button.Group>
            )}
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default ModalA;
