import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import productModel from '../../../screen/productView/productList'
import CustomButton from '../button/customButton'
// import productModel from './ProductViewModel'
// import CustomButton from '../../Components/common/Button/CustomButton'

type ProductTypes = {
  id?:number,
  prodName:string,
  qty:number
}

const CartItem = ({data,addQty,removeQty}:any) => {
    
  return (
    <View style={{
        flex:1,
        padding:20,
        marginTop:30
    }}>
        {data.map((item:ProductTypes,i:number) => {
            return (
              <View key={i} style={{borderBottomWidth:2,marginBottom:10,flexDirection:"row"}}>
                    <View key={i}>
                        <Text >Name: {item.prodName}</Text>
                        <Text >Quantity: {item.qty}</Text>
                    </View>
                    <View style={styles.itemqty}>
                    <CustomButton label={'-'} item={item} action={() => removeQty(item.id)}/>
                    <Text>{item.qty}</Text>
                    <CustomButton label={'+'} item={item} action={() => addQty(item.id)}/>
                </View>
              </View>
            )
        })}
      
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    
    // list:{
    //     borderBottomWidth:2,
    //     marginBottom:10,
    //     flexDirection:"row"
    //   },
      sample:{
        flexDirection: "row",
        justifyContent:"space-between",
        padding:5,
      },
      itemqty:{
        flex:1,
        flexDirection:"row",
        justifyContent:'flex-end',
        
      },
})