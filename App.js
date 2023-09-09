import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"

export default function App() {
  
  const DATA=[
    {value:1,label:'Java'},
    {value:2,label:'Python'},
    {value:3,label:'C#'},
    {value:4,label:'Dart'},
    {value:5,label:'Ruby'},
    {value:6,label:'PHP'},
    {value:7,label:'Kotlin'},
    {value:8,label:'JavaScript'},
    {value:9,label:'Swift'},
    {value:10,label:'Scala'},
    {value:11,label:'R'},
    {value:12,label:'Go lang'},
    {value:13,label:'Scala'},
    {value:14,label:'R'},
    {value:15,label:'Go lang'},
  ];
  const [list ,setlist]=useState(DATA);
  const [search,setSearch]=useState(null);

  const filterlist=(item)=>{
    const newlist=DATA.filter((val)=>val.label.toLocaleLowerCase().indexOf(item.toLocaleLowerCase())>=0);
    setlist(newlist);
  }

  useEffect(() => {
    if(search!=null){
      filterlist(search);
    }
  }, [search])
  

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.icon}>
          <Icon name='search' size={20} color={'#FFFFFF'}/>
        </View>
        <TextInput 
          style={styles.input} 
          placeholder='Search...'
          onChangeText={(val)=>setSearch(val)}
        />
      </View>
      <View>
        <FlatList 
          data={list}
          key={({item})=>item.value}
          renderItem={({item})=>{
            return(
              <View style={styles.listitem}>
                <Text style={styles.listtext}>{item.label}</Text>
              </View>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search:{
    backgroundColor:'#EBE9E9',
    margin:10,
    borderRadius:5,
    flexDirection:"row",
    marginTop:50
  },
  input:{
    flex:1,
    fontSize:16,
    padding:10,
  },
  icon:{
    backgroundColor:'#004C4C',
    padding:15,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
  },
  listitem:{
    marginHorizontal:10,
    marginVertical:5,
    backgroundColor:'#F3F0F0',
    padding:10,
    borderRadius:5
  },
  listtext:{
    fontWeight:'bold',
    fontSize:18,
  }
});
