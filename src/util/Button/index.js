import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native'

import IconV  from 'react-native-vector-icons/Feather'



export default props => {

    const stylesButton = [styles.button]

    if (props.doubleVertical) stylesButton.push(styles.buttonDoubleVertical)
    if (props.doubleHorizontal) stylesButton.push(styles.doubleHorizontal)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={()=> props.onClick(props.label)}  underlayColor="#ddd">
            {props.label !== 'delete' 
            ? <Text style={stylesButton}>{ props.label}</Text> 
            :<View style={styles.buttonIcon}><IconV  name="delete" size={25} color="#2A5D3C"/></View>}

        </TouchableHighlight>



    )
}



const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#fff',
        color:'#2A5D3C',
        textAlign: 'center',
        
        


    },
    operationButton:{
        backgroundColor:'#2A5D3C',
        color: '#FFF'
    },
    buttonDoubleVertical:{
        height:(Dimensions.get('window').width /4) * 1.8,
        width:(Dimensions.get('window').width /6),        
        textAlign:'center',
        backgroundColor:'#ddd',
        color:'#2A5D3C',
        textAlignVertical:'center',        
        marginHorizontal:10,
        borderRadius:50,
        fontSize:22,
        
    },
    buttonIcon:{
        height:(Dimensions.get('window').width /4) * 1.8,
        width:(Dimensions.get('window').width /6),        
        
        backgroundColor:'#ddd',
        color:'#2A5D3C',
        alignItems:'center',
        justifyContent:'center',
        
        marginHorizontal:10,
        borderRadius:50,
        fontSize:22,
        
    },
    doubleHorizontal:{
        width:(Dimensions.get('window').width /4) *2,
    },
    buttonTriple:{
        width:(Dimensions.get('window').width /4) *3,
    },
})