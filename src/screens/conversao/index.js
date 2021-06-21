import React, { useState, useMemo, useEffect } from 'react'

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    Dimensions
} from 'react-native'

import Button from '../../util/Button'
import Display from '../../util/Display'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'

    },
    display: {
        height: (Dimensions.get('window').height / 2.3)
    },
    button: {
        width: (Dimensions.get('window').width / 4) * 3,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    keyboard: { flexDirection: 'row', height: (Dimensions.get('window').width / 4) * 4, width: (Dimensions.get('window').width / 4) * 4, padding: 10 },
    buttonsOperation: { flexDirection: 'column', height: (Dimensions.get('window').width / 4) * 4, justifyContent: 'space-between' }
})






const Conversao = () => {


    const [valueDisplay, setValueDisplay] = useState('0')
    const [valueResultDisplay, setValueResultDisplay] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)


    const addDigit = (n) => {
        if (n === '.' && valueDisplay.includes('.')) {
            return
        }

        const clearDisplay = valueDisplay === '0' || clearDisplay
        const currentValue = clearDisplay ? '' : valueDisplay
        const displayValue = currentValue + n
        setValueDisplay(displayValue)
        setClearDisplay(false)

        if (n !== '.') {
            const newValue = parseFloat(displayValue)
            const valores = [...values]
            valores[current] = newValue
            setValues(valores)
        }


    }
    useEffect(() => {
        setValueResultDisplay(valueDisplay * 2)
    }, [valueDisplay])

    const clearMemory = () => {
        setValueDisplay('0')
    }

    const deleteLastChar = () => {
        if (valueDisplay === null || valueDisplay === '') setValueDisplay('0')
        if (valueDisplay !== '0' && valueDisplay.length > 1) {

            setValueDisplay(valueDisplay.slice(0, -1))

        } else if (valueDisplay !== '0' && valueDisplay.length === 1) 
        { 
            setValueDisplay('0') 
        }
        else {
            setValueDisplay('0')
        }
    }
        const setOperation = (operation) => {

        }


        return (

            <SafeAreaView style={styles.container}>



                <View style={styles.display}>
                    <Display value={valueDisplay} subValue="qtd"/>
                    <Display value={valueResultDisplay} subValue="qtd * 2"/>
                </View>

                <View style={styles.keyboard}>
                    <View style={styles.button}>


                        <Button label="7" onClick={addDigit} />
                        <Button label="8" onClick={addDigit} />
                        <Button label="9" onClick={addDigit} />

                        <Button label="4" onClick={addDigit} />
                        <Button label="5" onClick={addDigit} />
                        <Button label="6" onClick={addDigit} />

                        <Button label="1" onClick={addDigit} />
                        <Button label="2" onClick={addDigit} />
                        <Button label="3" onClick={addDigit} />

                        <Button label="0" doubleHorizontal onClick={() => addDigit(0)} />
                        <Button label="." onClick={() => addDigit('.')} />


                    </View>
                    <View style={styles.buttonsOperation}>
                        <Button label="AC" doubleVertical onClick={clearMemory} />
                        <Button label="delete" doubleVertical onClick={deleteLastChar} />
                    </View>

                </View>

            </SafeAreaView>

        )
    }

    export default Conversao;

