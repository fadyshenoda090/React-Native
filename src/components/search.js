import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../style';

const Search = () => {
    const [name, setName] = useState('');

    const changeName = (text) => {
        setName(text);
    };

    return (
        <View>
            <TextInput
                style={styles.searchBar}
                placeholder='Enter your name'
                placeholderTextColor='#aaa'
                value={name}
                onChangeText={changeName}
            />
        </View>
    );
};

export default Search;
