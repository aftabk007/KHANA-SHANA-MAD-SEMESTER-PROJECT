import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const food = [
  {
    title: 'Biryani',
    description: 'With raita and salad',
    price: '$10.50',
    image:
      'https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce',
    price: '$13.50',
    image:
      'https://www.thespruceeats.com/thmb/-YUYSXc4T2H4P8o2JBApzJ3F5rw=/2069x2069/smart/filters:no_upscale()/white-and-red-sauce-lasagna-recipe-995925-hero-1-fb2c2142b39042069f0c50310047256d.jpg',
  },
  {
    title: 'Chicken Karahi',
    description: 'With 2 Naan',
    price: '$15.50',
    image:
      'https://recipe52.com/wp-content/uploads/2018/04/Chicken-Karahi-Recipe-Pakistani-1-of-1.jpg',
  },
  {
    title: 'White Sauce Pasta',
    description: 'With butter lettuce',
    price: '$11.50',
    image:
      'https://vegveganmeat.com/wp-content/uploads/2021/09/white-sauce-pasta-recipe-penne-pasta.jpg',
  },
  {
    title: 'Hyderabadi Handi',
    description: 'With butter lettuce',
    price: '$9.50',
    image:
      'https://cookwithchandni.files.wordpress.com/2020/09/20200926_215908.jpg?w=1568',
  },
  ,
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} food={food} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
