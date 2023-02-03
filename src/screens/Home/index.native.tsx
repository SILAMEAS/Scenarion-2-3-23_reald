import React, {useEffect} from 'react';
import {
  Box,
  Button,
  FlatList,
  Text,
  View,
} from 'native-base';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

// import {faUser} from "@fortawesome/free-solid-svg-icons";
import {style} from "../../styles/style";
import { TouchableOpacity} from 'react-native';
import ShowFile from "./ShowFile";
import FileForm from "./FileForm";

import ViewPdfNative from '@src/components/templates/pdf/ViewPdf.native';

export interface Props {
  route: any,
  navigation: any,
}
export function HomeScreen({route, navigation}: Props) {
  const [list, setList] = React.useState([{id: 1, name: 'hello guys'}]);
  useEffect(() => {
      setList(prevState => [...prevState, {id: 2, name: route?.params.username}]);
  }, []);
  const handleSaveList = () => {
      const index = list.length + 1;
      setList(prevState => [...prevState, {id: index, name: 'This is a list item'}]);
  }
  const renderItem = ({item}: any) => (
      <Box style={style.cardList}>
          <TouchableOpacity
              onPress={handleSaveList}
          >
              <Text>
                  {item.name}
              </Text>
          </TouchableOpacity>
      </Box>
  );
  return (
      <View style={style.container}>
          <View>
              <ShowFile/>
              <FileForm/>
              <FlatList
                  data={list}
                  renderItem={renderItem}
                  keyExtractor={(item: any) => item.id}
              />
              <Button
                  style={style.button}
                  onPress={() => {
                      
                      navigation.navigate("Login")
                  }}>
                  Login Native
              </Button>
          </View>
        
          <ViewPdfNative/>
      </View>
  );
}

