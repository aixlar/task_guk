import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'

import random_num from './utils'


const ProductItem =
({productId, code, title, description, primaryImageUrl, assocProducts, weight, unit, unitFull, unitRatio, unitAlt, unitRatioAlt, unitFullAlt, priceRetail, priceRetailAlt,
priceGold, priceGoldAlt, bonusAmount, hasAlternateUnit, isActive, modified, amount, cart_amount, cart_class, bonusAmountAlt}) => (
      <div id="products_section">
        <div className="products_page pg_0">
            <div className="product product_horizontal">
                <span className="product_code">{"Код: " + String(code).replace("00000", '')}</span>
                <div className="product_status_tooltip_container">
                  <div className="amount_view">
                    <span className="product_status amount_word">Наличие</span>
                    <span className="pr_amount">{"  " + amount + " ШТ."}</span>
                  </div>
                </div>
                <div className="product_photo">
                    <a href="#" className="url--link product__link">
                        <img src={primaryImageUrl} />
                    </a>
                </div>
                <div className="product_description">
                    <a href="#" className="product__link">{title}</a>
                </div>
                <div className="product_tags hidden-sm">
                    <p>Могут понадобиться:</p>
                    {assocProducts.slice(0, assocProducts.length - 1).map ( assPr =>
                    <a href="#" className="url--link">{" " + assPr + ","}</a>
                    )}
                    <a href="#" className="url--link">{(" " + assocProducts[assocProducts.length-1]).replace(";", "")}</a>
                </div>
                <div className="product_units">
                    <div className="unit--wrapper">
                        <div className={"unit--select unit--active " + "p" + productId}>
                            <p
                              className="ng-binding"
                              onClick = {() => {
                                if (true) {
                                  const class_name = ".p" + productId
                                  const another_class_name = ".p2" + productId
                                  $(class_name).addClass("unit--active")
                                  $(another_class_name).removeClass("unit--active")

                                  const another_rp_class_name = ".rp" + productId
                                  const another_gp_class_name = ".gp" + productId
                                  const another_ba_class_name = ".ba" + productId
                                  $(another_rp_class_name).text(priceRetail)
                                  $(another_gp_class_name).text(priceGold)
                                  $(another_ba_class_name).text("Можно купить за " + bonusAmount + " балла")
                                }
                              }}
                            >
                              За м. кв.
                            </p>
                        </div>
                        <div className={"unit--select " + "p2" + productId}>
                            <p
                              className="ng-binding"
                              onClick = {() => {
                                if (true) {
                                  const class_name = ".p2" + productId
                                  const another_class_name = ".p" + productId
                                  $(class_name).addClass("unit--active")
                                  $(another_class_name).removeClass("unit--active")

                                  const another_rp_class_name = ".rp" + productId
                                  const another_gp_class_name = ".gp" + productId
                                  const another_ba_class_name = ".ba" + productId
                                  $(another_rp_class_name).text(priceRetailAlt)
                                  $(another_gp_class_name).text(priceGoldAlt)
                                  $(another_ba_class_name).text("Можно купить за " + bonusAmountAlt + " балла")
                                }
                              }}
                            >
                              За упаковку
                            </p>
                        </div>
                    </div>
                </div>
                <p className="product_price_club_card">
                    <span className="product_price_club_card_text">По карте<br />клуба</span>
                    <span className={"goldPrice " + "gp" + productId}>{priceGold}</span>
                    <span className="rouble__i black__i">
                        <img className="rouble" src='ruble_one.png'/>
                    </span>
                </p>
                <p className="product_price_default">
                    <span className={"retailPrice " + "rp" + productId}>{priceRetail}</span>
                    <span className="rouble__i black__i">
                        <img className="rouble" src='ruble_two.svg'/>
                     </span>
                </p>
                <div className="product_price_points">
                    <p className={"ng-binding " + "ba" + productId}>{"Можно купить за " + bonusAmount + " балла"}</p>
                </div>
                <div className="list--unit-padd"></div>
                <div className="list--unit-desc">
                    <div className="unit--info">
                        <div className="unit--desc-i"></div>
                        <div className="unit--desc-t">
                            <p>
                                <span className="ng-binding">Продается упаковками:</span>
                                <span className="unit--infoInn">{"1 упак. = " + String(1/unitRatioAlt).slice(0, 4) + " м. кв."} </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="product__wrapper">
                    <div className="product_count_wrapper">
                        <div className="stepper">
                            <input className={"product__count stepper-input stepper-input_" + productId} type="text" value={cart_amount + ""} />
                            <span
                              className="stepper-arrow up"
                              onClick={() => {
                                if (amount > 1) {


                                  cart_amount += 1
                                  $(cart_class).val(cart_amount + "")
                                }
                              }}
                            >
                            </span>
                            <span
                              className="stepper-arrow down"
                              onClick={() => {
                                if (cart_amount > 1) {

                                  cart_amount -= 1;
                                  $(cart_class).val(cart_amount + "")
                                }
                                }}
                              >
                            </span>
                        </div>
                    </div>
                    <span className="btn btn_cart"
                          data-url="/cart/"
                          data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192"
                          onClick={() => {
                            if (amount > 0) {
                              amount -= cart_amount
                              $(".pr_amount").text("  " + amount + " ШТ.")
                              $(cart_class).val(1 + "")
                              cart_amount = 1
                            }
                          }}
                    >
                        <img className="cart__icon" width='20px' src='cart.svg'></img>
                        <span data-product-id={productId} className="ng-binding">
                            В корзину
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default ProductItem
