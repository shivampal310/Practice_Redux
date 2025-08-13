import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartData = useSelector((state) => state.reducer);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{uri:item.image}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {
        cartData.length ?
        <Text style={styles.title}>Your Cart Items</Text> :
        <Text style={styles.title}>Your Cart is Empty</Text>
      }
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default Cart;

