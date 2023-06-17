import { StyleSheet,Text,View ,Image} from "react-native";

import React from "react";

import { Button } from "react-native-elements";

const Device =({device,onDelete})=>{
return (
    <View style={styles.item}>
    <View style={styles.itemImageContainer}>
        {/* <Image source={require(device.imageURL)}/> */}
    </View>
    <View style={{paddingLeft:15}}>
    <Text>{device.id}</Text>
    <Text>{device.name}</Text>
    <Text>{device.number}</Text>
    <Text>{device.date}</Text>
    <Text>{device.price}</Text>
    </View>
    <View style={{paddingLeft:125}}>
        <Button title="Sua"></Button>
        <Button title="Xoa" onPress={()=>onDelete(device)}></Button>
    </View>
    </View>
);
}
export default Device

const styles = StyleSheet.create({
    item: {
        paddingVertical: 15,
        borderBottomColor: '#E2E2E2',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },
    itemImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    itemImage: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    right: {
        paddingLeft: 15
    },
    deleteButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});