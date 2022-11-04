import { StyleSheet, View,TouchableOpacity } from 'react-native'
import React from 'react'
import ProductList from './src/screen/ProductView/ProductList'
import { store} from './src/Redux/products/store'
import { Provider } from 'react-redux'
const App = () => {

  return (

    <Provider store={store}>
        <ProductList />
    </Provider>
  )
}

export default App
