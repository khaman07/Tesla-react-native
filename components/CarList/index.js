import React from "react";
import { View,Text,FlatList, Dimensions} from "react-native";
import styles from "./styles";
import cars from './cars';
import CarItem from '../Caritem';


const CarList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                // to send directly to nearest item on scrolling
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
};

export default CarList;

// {Cars.map( (user)=> {
//     {<CarItem
//       name = {user.name}
//       tagline = {user.tagline}
//       taglineCTA = {user.taglineCTA}
//       image = {image}
//     }
//   })}