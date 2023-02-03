import {View, Input, Button} from "native-base";
import React, {useState} from "react";

const FileForm = () => {
    const [name, setName] = useState("");
    return(
        <View>
            <Input variant={'underlined'} type='text' defaultValue={name} onChangeText={setName} placeholder={'Enter file name'} />
            <Button>Save</Button>
        </View>
    )
}
export default FileForm;
