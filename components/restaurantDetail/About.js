import React from 'react';
import { View, Text, Image } from 'react-native';

// const restaurantInfo = {
//   name: 'Bundu Khan',
//   image:
//     'https://media-exp1.licdn.com/dms/image/C511BAQFlvUglcDWyaw/company-background_10000/0/1531209479796?e=2147483647&v=beta&t=Rc-Ihp_7LaY_06VeCGzljmBuF5spfYHdK8dQ4BN60w8',
//   price: '$$',
//   reviews: 1500,
//   rating: 4.5,
//   categories: [
//     { title: 'Desi' },
//     { title: 'Tawa Special' },
//     { title: 'Desert' },
//   ],
// };

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories
    .map((cat) => cat.title)
    .join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{ width: '100%', height: 180 }}
  />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
