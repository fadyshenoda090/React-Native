import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../style.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ onPress }) => {
    return (
        <View>
            <Pressable style={styles.itemContainer} onPress={() => onPress()}>
                <Icon name='search' size={30} color='white' style={{ marginLeft: 5 }} />
            </Pressable>
        </View>
    );
};

export default Button;
