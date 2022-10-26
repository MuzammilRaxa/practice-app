import coinsStyle from "../styles/coins.module.css"
import Link from "next/link"


const CoinItem = ({ coin }) => {
    return (
        <Link href={`/coin/${coin.id}`}>
            <div className={coinsStyle.card}>
                <h1 className={coinsStyle.title}> {coin.name}</h1>
                <img src={coin.icon} />
                <p className="price">${coin.price}</p>
            </div>
        </Link>
    )
}

export default CoinItem
