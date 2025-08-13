import { View, Text ,Alert ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const header = () => {
  const navigation=useNavigation();
  const[cartItems,setCartItems]=useState(0)
  const cartData=useSelector((state)=>state.reducer)
  console.warn(cartData)
  useEffect(()=>{
   setCartItems(cartData.length)
  },[cartData])
  return (
    <View>
      <View style={{height:50,backgroundColor:'orange',flexDirection:'row-reverse'}}>
       <TouchableOpacity style={{backgroundColor:'red',height:50,width:50,borderRadius:25}}
       onPress={() => navigation.navigate('Cart')}

       >
        <Text style={{textAlign:'center',fontSize:35}}>{cartItems}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default header