import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
interface type_Session {
  id: number;
  status: number;
  ttl: number;
  date: string;
  expires: string;
  actors: [];
  documents: [];
  scenarios: [];
}
export interface Type_actor {
  id?: number;
  date?: string;
  aid?: number;
  name?: string;
  type?: number;
  roles?: string[];
  'adm-id'?: string;
  'first-name'?: string;
  country?: string;
  login?: string;
  email?: string;
  mobile?: string;
  'manifest-data'?: {};
  'user-data'?: {};
}
interface type_File {
  did: number;
  status: number;
  abstact: string;
  'file-name': string;
  date: string;
  expires: string;
  title: string;
}
interface type_approve_doc {
  otp: string;
  signatures: string[];
  threadId: string;
}
interface type_cgu {
  actor: string;
  authority: string;
  'download-url': string;
  session: string;
  token: string;
  version: string;
}
interface type_certificate {
  date: string;
  expires: string;
  url: string;
}
interface type_signature {
  signatures: [
    {tag: string; signatureId: string; actor: string; document: string},
  ];
  threadId: string;
  token: string;
}
///==============NEW
interface type_forSign {
  Actor: string;
  Document: string;
  IdSession: string;
}
export interface CounterState {
  value: number;
  Email: string;
  Name: string;
  Password: string;
  DATA: [];
  GetOne: any;
  Num_cal: number;
  AllSession: [];
  DATAofSession: type_Session;
  DATAofFile: type_File;
  DATAofActor: Type_actor;
  DataScenario: any;
  Doc_Approve: type_approve_doc;
  Data_cgu: type_cgu;
  Data_certificate: type_certificate;
  doc_ng: string;
  actor_ng: string;
  cert_ng: string;
  Data_signature: type_signature;
  checkEndOrNot: boolean;
  AllFileUpload: {uploads: string};
  ForSign: type_forSign;
}

const initialState: CounterState = {
  value: 0,
  Email: 'sok',
  Name: '',
  Password: '',
  DATA: [],
  GetOne: {},
  Num_cal: 0,
  AllSession: [],
  DATAofFile: {
    did: 0,
    status: 0,
    abstact: '',
    'file-name': '',
    date: '',
    expires: '',
    title: '',
  },
  DATAofSession: {
    id: 0,
    status: 0,
    ttl: 0,
    date: '',
    expires: '',
    actors: [],
    documents: [],
    scenarios: [],
  },
  DATAofActor: {
    id: 0,
    name: '',
    aid: 0,
    type: 0,
    roles: [],
    'adm-id': '',
    'first-name': '',
    country: '',
    login: '',
    email: '',
    mobile: '',
    'manifest-data': {},
    'user-data': {},
    date: '',
  },
  DataScenario: {},
  Doc_Approve: {
    otp: '',
    signatures: [],
    threadId: '',
  },
  Data_cgu: {
    actor: '',
    authority: '',
    'download-url': '',
    session: '',
    token: '',
    version: '',
  },
  Data_certificate: {date: '', expires: '', url: ''},
  doc_ng: '',
  actor_ng: '',
  cert_ng: '',
  Data_signature: {
    signatures: [{tag: ' ', signatureId: ' ', actor: ' ', document: ' '}],
    threadId: ' ',
    token: ' ',
  },
  checkEndOrNot: true,
  AllFileUpload: {uploads: ''},
  ForSign: {
    Actor: '',
    Document: '',
    IdSession: '',
  },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    Set_Num_cal: (state, action) => {
      state.Num_cal = action.payload;
    },
    increment: state => {
      state.value += 1;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setDATA: (state, action) => {
      state.DATA = action.payload;
    },
    setOne: (state, action) => {
      state.GetOne = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setAllSession: (state, action) => {
      state.AllSession = action.payload;
    },
    setDATAofSession: (state, action) => {
      state.DATAofSession = action.payload;
    },
    setDATAofFile: (state, action) => {
      state.DATAofFile = action.payload;
    },
    setDATAofActor: (state, action) => {
      state.DATAofActor = action.payload;
    },
    setDataScenario: (state, action) => {
      state.DataScenario = action.payload;
    },
    setDoc_Approve: (state, action) => {
      state.Doc_Approve = action.payload;
    },
    setData_cgu: (state, action) => {
      state.Data_cgu = action.payload;
    },
    setData_certificate: (state, action) => {
      state.Data_certificate = action.payload;
    },

    setDoc_ng: (state, action) => {
      state.doc_ng = action.payload;
    },
    setActor_ng: (state, action) => {
      state.actor_ng = action.payload;
    },
    setCert_ng: (state, action) => {
      state.cert_ng = action.payload;
    },
    setData_signature: (state, action) => {
      state.Data_signature = action.payload;
    },
    setCheck: (state, action) => {
      state.checkEndOrNot = action.payload;
    },
    setAllFileUpload: (state, action) => {
      state.AllFileUpload = action.payload;
    },
    setForSign: (state, action) => {
      state.ForSign = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setEmail,
  setName,
  setPassword,
  setDATA,
  setOne,
  Set_Num_cal,
  setAllSession,
  setDATAofSession,
  setDATAofFile,
  setDATAofActor,
  setDataScenario,
  setDoc_Approve,
  setData_cgu,
  setData_certificate,
  setDoc_ng,
  setActor_ng,
  setCert_ng,
  setData_signature,
  setCheck,
  //========================
  setAllFileUpload,
  setForSign,
} = counterSlice.actions;

export default counterSlice.reducer;
