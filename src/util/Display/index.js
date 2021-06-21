import React from 'react'

import { View, Text, StyleSheet,Dimensions } from 'react-native'


const styles = StyleSheet.create({

    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        height: (Dimensions.get('window').height /5 ) * 1

    },
    displayValue: {
        fontSize: 40,
        color: '#424242'
    },
    subDisplay:{
       fontSize:18,
       color:'#ddd',
       textAlign:'right' 
    }
})


export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1} >{props.value}</Text>
        <Text style={styles.subDisplay}
             >{props.subValue}</Text>
    </View>