import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import { addToCart, removeFromCart } from './components/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './components/Cart';

const Stack = createNativeStackNavigator();

const Wrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const productsData = [
    {
      id: '1',
      name: 'Red T-Shirt',
      price: 499,
      image:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQO1D9_AtlcY0yD1TvvF7QQ59ETPgUIV9r-ySOoprd7draWyCcn7breVTlOzKXSAecli0W1ATw-3kEkjDB11fIKf5NTUpqC8nH1iBH8LNyJ0q3Cqghl3eaQbVaW',
    },
    {
      id: '2',
      name: 'Blue Jeans',
      price: 999,
      image:
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsrM2NQ6pxtQ8YMUnW5-EcBsRxfKWjaDujidSQieIxcbKXS7lGRJILnQccR3aTT0bkfmrl7BpzO7WyexaiBjU58t6MEKieXeckUgSnVfTa4QzRXJpaXRex9clbJW5YVyDER2o_oTzoG2wFG_OvOA&usqp=CAc',
    },
    {
      id: '3',
      name: 'Sneakers',
      price: 1499,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQl1dZwwVbAc_sKzMwZARjexcJZ3PmTQyx6na3JRAPTLvTQhO4O4LD2JbslcaHuZksaAkrujujDtRDo3UGUFvfz6rwAvS3vGyUB514bkN40WpRBWgsEKgNyPqM9vHDYKkkzv0wSJ-_2UI&usqp=CAc',
    },
    {
      id: '4',
      name: 'Cap',
      price: 299,
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEYhXWNizpFZvnrCCdQHkGM15eHaPGd234tIJnKBX__KBAUKLX-_TmXcrw4KfDAac2JDyRYX5MyflQPfJYV6mDTmSPOgZoQVz6DPUGRSo3u7TDK_s7gqsJMmc0sPlKHe6-jMg9h1cX4fk&usqp=CAc',
    },
  ];

  const dispatch = useDispatch();
  const cartData = useSelector(state => state.reducer);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.id));
  };

  const isInCart = item => {
    return cartData.some(cartItem => cartItem.id === item.id);
  };


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Header />
      <ScrollView>
        {productsData.map(item => (
          <View style={styles.card} key={item.id}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <View style={styles.buttonWrapper}>
              {isInCart(item) ? (
                <Button
                  title="Remove from Cart"
                  color="#c0392b"
                  onPress={() => handleRemoveFromCart(item)}
                />
              ) : (
                <Button
                  title="Add to Cart"
                  color="#2c3e50"
                  onPress={() => handleAddToCart(item)}
                />
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 5,
  },
});

export default Wrapper;
