# Introduction

Shopping Cart NVVM pattern, Add and Reduce quantity and when quantity is Zero `-` button is disabled 

# Supported React Native and React Version

React Native

 `0.70.4`

React

`18.1.0`

# Installation

NPM

```npm i act_mvvm_shop_cart```

or Yarn

```yarn add act_mvvm_shop_cart```

# Usage

`import { CustomButton, CartItem } from 'act_mvvm_shop_cart'`

or 

`import { CustomButton, CartItem } from 'act_mvvm_shop_cart/src/Components/Common_index'`

# Sample Code

 You can use ItemCart like this with basic parameters,

```
  <View style={{ borderBottomWidth:2,marginBottom:10,flexDirection:"row"}}> 
        <ItemCart
            data = {data}
            addQty ={function}
            removeQty={function}
        />
    </View> 
```

And Let say you have a Data like this


```
const data = [
  {
      id:1,
      prodName:'Alaska',
      qty:0
  },
  {
      id:5,
      prodName:'Bear Brand',
      qty:3
  }]
```


   Create a state for your data, this state will be use to update Quantity of your data, just set your constant variable of data in useState, sample code like this
    
  ```const [cartData, setCartData] = useState(data)```

  And Create an Add Quantity function like this

  ```
  const updateAddStatsInc = (id) => {
  const isSelected = cartData.find((sel) => sel.id === id )
  
  if (isSelected){
    let {qty} = isSelected
    isSelected.qty = qty+1
    setCartData([...cartData])
    
    console.log(cartData)
  }else{
    data
  }

}
```

And to Reduce Quantity, just change function name and change `+` into `-` sign, sample code like this

```
const updateReduceStatsInc = (id) => {
  const isSelected = cartData.find((sel) => sel.id === id )
  
  if (isSelected){
    let {qty} = isSelected
    isSelected.qty = qty - 1
    setCartData([...cartData])
    
    console.log(cartData)
  }else{
    data
  }

}
```

and now let's set function name into basic parameters of CartItem and set data into the useState we made

```
<View style={{ borderBottomWidth:2,marginBottom:10,flexDirection:"row"}}> 
        <ItemCart
            data = {cartData}
            addQty ={updateAddStatsInc}
            removeQty={updateReduceStatsInc
        />
</View>
```

Complete Code is look like this

```
import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { CustomButton, CartItem } from 'act_mvvm_shop_cart' 

const data = [
  {
      id:1,
      prodName:'Alaska',
      qty:0
  },
  {
      id:5,
      prodName:'Bear Brand',
      qty:3
  }]

const App = () => {
const [cartData, setCartData] = useState(data)

const updateAddStatsInc = (id) => {
  const isSelected = cartData.find((sel) => sel.id === id )
  
  if (isSelected){
    let {qty} = isSelected
    isSelected.qty = qty+1
    setCartData([...cartData])
    
    console.log(cartData)
  }else{
    data
  }

}
const updateReduceStatsInc = (id) => {
  const isSelected = cartData.find((sel) => sel.id === id )
  
  if (isSelected){
    let {qty} = isSelected
    isSelected.qty = qty - 1
    setCartData([...cartData])
    
    console.log(cartData)
  }else{
    data
  }

}

  return (
    <View style={{alignItems:'center'}}>

     <View style={{ borderBottomWidth:2,
        marginBottom:10,
        flexDirection:"row"}} >
      <CartItem
      data = {cartData}
      addQty ={updateAddStatsInc}
      removeQty={updateReduceStatsInc}
      />
    </View>
      
    </View>
  )
}

export default App

```

  

# Node Version

`v16.17.0`

# Screenshots

![312314682_1477375882750818_1343012752205841344_n](https://user-images.githubusercontent.com/108800492/199645629-848fc12c-10fb-4a9d-a625-4f1cf8152477.jpg)
![313038449_463482755630492_2725771666647890915_n](https://user-images.githubusercontent.com/108800492/199645630-2c2de5ae-dde9-4829-8c42-495a18d2d86f.jpg)

# Versioning Changelogs
 
 Versions
 
```
Version 0.0.19 - update Versioning ChangeLogs and Supportive React Native Version and React version
```

```
Version 0.0.18 - update README.md
```

```
Version 0.0.17 - update Convention
```

```
Version 0.0.16 - update README.md
```

```
Version 0.0.16 - update Conventions
```

```
Version 0.0.15 - update package.json devDependency
```

```
Version 0.0.14 - update README.md
```

```
Version 0.0.13 - update components Path name into Pascal Case
```

```
Version 0.0.12 - update README.md
```

```
Version 0.0.11 - Update conventions
```

```
Version 0.0.10 - update README.md 
```

```
Version 0.0.9 - update Component Design
```

```
Version 0.0.8 - update README.md with Documentation of codes
```

```
Version 0.0.7 - update conventions
```

```
Version 0.0.6 - Update README.md
```

```
Version 0.0.5 - Applying Mini-app Conventions
```

```
Version 0.0.4 - Immutability of Redux
```

```
Version 0.0.3 - Add README.md
```

```
Version 0.0.2 - add builder bob to the package
```

```
Version 0.0.1 - Create Components of simple Shopping Cart
```


