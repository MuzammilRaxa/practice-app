import Axios from "axios"
import { useRouter } from "next/router"
import coinsStyle from "../../../styles/coins.module.css"


const coin = ({ coin }) => {
    // const router = useRouter()
    // const { id } = router.query
    const getCoins = async () => {
        const coins = await Axios.get(`https://api.coinstats.app/public/v1/coins`);
    }
    getCoins()
    return (
        <div className={coinsStyle.grid}>
            <div className='coinDetails'>
                <div className="heading">
                    <h1 className={coinsStyle.title}>{coin.name}</h1>
                    <img src={coin.icon} />
                </div>
                <table>
                    <tbody className="tBody">
                        <tr>
                            <th>Price</th>
                            <td>{coin.price}</td>

                        </tr>
                        <tr>
                            <th>Rank</th>
                            <td>{coin.rank}</td>
                        </tr>
                        <tr>
                            <th>Volume</th>
                            <td>{coin.volume}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// export async function getServerSideProps(context) {
//     const data = await Axios.get(`https://api.coinstats.app/public/v1/coins/${context.params.id}`);
//     return {
//         props: {
//             coin: data.data.coin,
//         }, // will be passed to the page component as props
//     }
// }

export async function getStaticProps(context) {
    const coin = await Axios.get(`https://api.coinstats.app/public/v1/coins/${context.params.id}`);
    return {
        props: {
            coin: coin.data.coin,
        },
    }

}
export const getStaticPaths = async () => {
    const { data: { coins } } = await Axios.get(`https://api.coinstats.app/public/v1/coins`);
    const ids = coins.map((coin) => coin.id)

    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false,
    }
}



export default coin
