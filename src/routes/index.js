import React from 'react'

import {SafeAreaView, Text, StyleSheet, } from 'react-native'

import Conversao from '../screens/conversao'

 
export default props =>{
    return(

        <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Conversao/>
        </SafeAreaView>

    )
}