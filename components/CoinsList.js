import coinsStyle from "../styles/coins.module.css"

import React from 'react'
import CoinItem from "./CoinItem"

const CoinsList = ({ coins }) => {
    return (
        <div className={coinsStyle.grid}>
            {coins.coins.map((coin) => {
                return (
                   <CoinItem coin={coin} />
                )
            })}
        </div>
    )
}

export default CoinsList
