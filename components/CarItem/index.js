import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import StylesButton from '../StyledButton'
const CarItem = (props) => {
  
    const { name, tagline, image, taglineCTA } = props.car.item;

    return (

        <View style={styles.carContainer}>
            <ImageBackground source={image}
                style={styles.image}></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}&nbsp;
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text></Text>
            </View>

            <View style={styles.buttonContainer}>
                <StylesButton
                    type=' '
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn('primary')
                    }} />
                <StylesButton
                    type='secondary'
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn('secondary')
                    }} />
            </View>

        </View>
    )
}

export default CarItem