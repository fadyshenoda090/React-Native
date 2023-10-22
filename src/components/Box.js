import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../style';

export default function Box({ colorName, hexCode }) {
    const boxStyle = {
        backgroundColor: hexCode,
    };

    return (
        <View>
            <Text style={[styles.colorText, boxStyle]}>
                {colorName} {hexCode}
            </Text>
        </View>
    );
}
