import React from 'react'

import ProductItem from './ProductItem'
import random_num from './utils'

const products = require('./products.json')

const getRnd = () => {return 1 + Math.floor(Math.random() * 10)}

const none = () => (
  <div className = "assortment">
    {products.map ( product =>
      <ProductItem
        productId={product.productId}
        code={product.code}
        title={product.title}
        description={product.description}
        primaryImageUrl={product.primaryImageUrl}
        assocProducts={product.assocProducts.split(";\n")}
        weight={product.weight}
        unit={product.unit}
        unitFull={product.unitFull}
        unitRatio={product.unitRatio}
        unitAlt={product.unitAlt}
        unitRatioAlt={product.unitRatioAlt}
        unitFullAlt={product.unitFullAlt}
        priceRetail={product.priceRetail + random_num()}
        priceGold={product.priceGold + random_num()}
        priceRetailAlt={Math.floor(product.priceRetail/product.unitRatioAlt) + random_num()}
        priceGoldAlt={Math.floor(product.priceGold/product.unitRatioAlt)  + random_num()}
        bonusAmount={Math.floor(product.priceRetail*0.6) + random_num()}
        bonusAmountAlt={Math.floor( (product.priceRetail*0.6)/product.unitRatioAlt ) + random_num()}
        hasAlternateUnit={product.hasAlternateUnit}
        isActive={product.isActive}
        modified={product.modified}
        amount={getRnd()}
        cart_amount = {1}
        cart_class = {".stepper-input_" + product.productId}
      />
    )}

  </div>
)


export default none
