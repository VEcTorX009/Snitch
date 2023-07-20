import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from '../style';

const CategorySlider = ({setFilter}) => {
  // Dummy data for the slider
  const categories = [
    { id: 0, name: 'All' }, // Change id to 0 for 'All' category
    { id: 1, name: 'School' },
    { id: 2, name: 'Regional' },
    { id: 3, name: 'National' },
    { id: 4, name: 'International' },
    // Add more categories as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
    setFilter(categories[categoryId].name==="All"? "":categories[categoryId].name);
  };

  return (
    <View style={style.sliderbody}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              style.category,
              selectedCategory === category.id && { backgroundColor: '#724ED9' }, // Change background color for selected category
            ]}
            onPress={() => handleCategoryPress(category.id)}
          >
            <Text style={[style.cathead, selectedCategory === category.id && { color: 'white' }]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategorySlider;
