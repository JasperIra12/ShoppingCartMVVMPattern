import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

type CustomButtonProps = {
  action:any,
  item: {
    qty: number
  },
  label: string
}

const CustomButton = ({item,label,action}:CustomButtonProps) => {
  return (
    <TouchableOpacity 
    disabled={label == '-' && item.qty < 1 ? true : false}
    onPress={action}
    style={styles.cartbtn}>
        <Text>{label}</Text>
    </TouchableOpacity>
  )
}



export default CustomButton

const styles = StyleSheet.create({
    cartbtn:{
        borderWidth:1,
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "silver",
        marginRight:5,
        marginStart:5
      }
})