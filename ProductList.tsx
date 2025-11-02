import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      fetchProducts();
    }, 5000);
    
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch('https://api.luciq.com/products');
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <TouchableOpacity 
        onPress={() => {
          console.log('Product clicked:', item.id);
        }}
      >
        <View style={{ padding: 20, flexDirection: 'row' }}>
          <Image 
            source={{ uri: item.imageUrl }}
            style={{ width: 100, height: 100 }}
          />
          
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {item.name}
            </Text>
            
            <Text style={{ fontSize: 16, color: '#666' }}>
              ${item.price}
            </Text>
            
            <Text style={{ fontSize: 14, marginTop: 5 }}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
      {loading && (
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );
};

export default ProductList;

