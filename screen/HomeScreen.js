import { useEffect, useState } from "react";

import { TextInput ,SafeAreaView,View,Text, Button} from "react-native";

import Device from "../component/Device";

const HomeScreen =()=>{
    
    const [device,setDevice]=useState([]);
    
    const [id,setId]=useState();
    const [name,setName]=useState();
    const [number,setNumber]=useState();
    const [date,setDate]=useState();
    const [price,setPrice]=useState();


    async function getListDevice(){
        let API_URL ="http://192.168.203.103:3000/devices";
        try {
            const response=await fetch(API_URL);
            const data= await response.json();
            setDevice(data);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
       
    };

    const deleteDevice =async (item)=>{
        try {
            const deviceId = item.id;
            const API_URL = 'http://192.168.203.103:3000/devices/' + deviceId;
            const response = await fetch(API_URL, { method: 'DELETE' });
            if (response && response.status === 200) {
                getListDevice();
            }
        } catch (error) {
            console.log('Delete data failed ' + error);
        }
    }

    const updateDevice =async (item)=>{
        let data={
            id:id,
            Name:name,
            date:date,
            number:number,
            price:price
        }
        try {
            const deviceId = item.id;
            const API_URL = 'http://192.168.203.103:3000/devices/' + deviceId;
            const response = await fetch(API_URL, { method: 'PUT',
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data)});
            if (response && response.status === 200) {
                getListDevice();
            }
        } catch (error) {
            console.log('Update data failed ' + error);
        }

    }

    const renderUpdate=()=>{

        return(
        <View>
        <TextInput placeholder="id" value={id} onChangeText={setId}></TextInput>
        <TextInput placeholder="name" value={name} onChangeText={setName}></TextInput>
        <TextInput placeholder="date" value={date} onChangeText={setDate}></TextInput>
        <TextInput placeholder="number" value={number} onChangeText={setNumber}></TextInput>
        <TextInput placeholder="price" value={price} onChangeText={setPrice}></TextInput>
        <Button title="Sua" onPress={updateDevice}/>
        </View>
        );
    };

    useEffect(()=>{
        getListDevice();
    },[])
    
    

    return(
        <SafeAreaView>
            <View>
            {device.map((item,index)=>{
                return(
                 <Device device={item} key={index} onDelete={deleteDevice} onUpdate={renderUpdate}/>
                 );
            })}
            </View>

            <Button title="Them"> </Button>
            </SafeAreaView>
    );
};

export default HomeScreen;