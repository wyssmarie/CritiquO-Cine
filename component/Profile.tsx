import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Profile() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../asset/Emi.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text>Emi</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 10,
        margin: 15
    },
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
        marginTop: 10
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    }
});

export default Profile;
