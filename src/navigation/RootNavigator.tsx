import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, LoginScreen, ForgotPasswordScreen} from '@screens/index';
import View_PDF from '@src/screens/Pdf/View_PDF';
// import {Counter} from '@src/redux/counter/Counter';
import CRUD from '@src/screens/CRUD/CRUD';
import Calculator from '@src/screens/Interface/Test/Calculator';

import Facebook from '@src/screens/Interface/CloneUI_Facebook/Facebook';
import Facebook_create from '@src/screens/Interface/CloneUI_Facebook/Facebook_create';
import Facebook_profile from '@src/screens/Interface/CloneUI_Facebook/Facebook_profile';
import {Constant_Navigator} from '@src/screens/Interface/CloneUI_Facebook/Constant_Navigator';
import Facebook_forgetPass from '@src/screens/Interface/CloneUI_Facebook/Facebook_forgetPass';
import API_NG_crud from '@src/screens/Interface/Test_backend_API_NG/Page/Home/Page_Home';
import API_NG_FILE from '@src/screens/Interface/Test_backend_API_NG/Page/Page_file_detail';
import Api_ng_actor from '@src/screens/Interface/Test_backend_API_NG/components/actor/Modal_actor';
import Otp from '@src/screens/Interface/Test_backend_API_NG/components/session/Otp';
import Api_ng_profile_actor from '@src/screens/Interface/Test_backend_API_NG/Page/Page_profile_actor';
import PageApprovedoc from '@src/screens/Interface/Test_backend_API_NG/Page/PageApprovedoc';
import Interface_Screen from '@src/screens/Interface/Test/Interface_Screen';
import FormInterface from '@src/screens/Interface/Test/FormInterface';
import Page_cgu from '@src/screens/Interface/Test_backend_API_NG/Page/Page_cgu';
import Page_certificate from '@src/screens/Interface/Test_backend_API_NG/Page/Page_certificate';
import Page_test from '@src/screens/Interface/Test_backend_API_NG/Page/Page_test';
// import {FilePickerMobile} from '@src/components/cheaNit_picker_file/file_picker';
import WebOrMoblie from '@src/components/cheaNit_picker_file/WebOrMoblie';

import PageSession from '@src/screens/Interface/Test_backend_API_NG/Page/Newer/Page/PageSession';
import PageUpload from '@src/screens/Interface/Test_backend_API_NG/Page/Newer/Page/PageUpload';
import PageDetail from '@src/screens/Interface/Test_backend_API_NG/Page/Newer/Page/PageDetailRoot';
import PageScenario from '@src/screens/Interface/Test_backend_API_NG/Page/Newer/Page/PageScenario';

const Stack = createStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Constant_Navigator.NewP_Sesion}
    >
      <Stack.Screen
        name={Constant_Navigator.NewP_Upload}
        component={PageUpload}
      />
      <Stack.Screen name={Constant_Navigator.Login} component={LoginScreen} />
      <Stack.Screen
        name={Constant_Navigator.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={Constant_Navigator.Home} component={HomeScreen} />
      <Stack.Screen name={Constant_Navigator.View_PDF} component={View_PDF} />
      <Stack.Screen name={Constant_Navigator.View_CRUD} component={CRUD} />
      {/* My adding */}
      <Stack.Screen
        name={Constant_Navigator.Interface_cal}
        component={Calculator}
      />
      <Stack.Screen
        name={Constant_Navigator.Interface}
        component={Interface_Screen}
      />
      <Stack.Screen
        name={Constant_Navigator.Interface_form}
        component={FormInterface}
      />
      <Stack.Screen
        name={Constant_Navigator.Interface_facebook}
        component={Facebook}
      />
      <Stack.Screen
        name={Constant_Navigator.Interface_facebook_create}
        component={Facebook_create}
      />
      <Stack.Screen
        name={Constant_Navigator.Interface_facebook_profile}
        component={Facebook_profile}
      />
      <Stack.Screen
        name={Constant_Navigator.Interface_facebook_forgetPassword}
        component={Facebook_forgetPass}
      />
      <Stack.Screen name={Constant_Navigator.API_NG} component={API_NG_crud} />
      <Stack.Screen
        name={Constant_Navigator.API_NG_FILE}
        component={API_NG_FILE}
      />
      <Stack.Screen
        name={Constant_Navigator.Api_ng_actor}
        component={Api_ng_actor}
      />
      <Stack.Screen name={Constant_Navigator.Otp} component={Otp} />
      <Stack.Screen
        name={Constant_Navigator.Api_ng_profile_actor}
        component={Api_ng_profile_actor}
      />
      <Stack.Screen
        name={Constant_Navigator.PageApprovedoc}
        component={PageApprovedoc}
      />
      <Stack.Screen name={Constant_Navigator.Page_cgu} component={Page_cgu} />
      <Stack.Screen
        name={Constant_Navigator.Page_certificate}
        component={Page_certificate}
      />
      <Stack.Screen name={Constant_Navigator.PS} component={Page_test} />
      <Stack.Screen
        name={Constant_Navigator.FilePicker}
        component={WebOrMoblie}
      />
      <Stack.Screen
        name={Constant_Navigator.NewP_Sesion}
        component={PageSession}
      />
      <Stack.Screen
        name={Constant_Navigator.PageDetail}
        component={PageDetail}
      />
      <Stack.Screen
        name={Constant_Navigator.NewP_PageScenario}
        component={PageScenario}
      />
    </Stack.Navigator>
  );
}
