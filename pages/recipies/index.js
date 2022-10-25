import Axios from "axios";

const RecipieList = ({ recipies }) => {

    return (
        <div >
            {recipies.coins.map((coin) => {
                return (
                    <div>
                        <h1> {coin.name}</h1>
                        <img src={coin.icon} />
                        <p>Rs {coin.price}</p>
                    </div>
                )
            })}
        </div>
    )
};

export const getStaticProps = async () => {
    const data = await Axios.get('https://api.coinstats.app/public/v1/coins?skip=0');

    return {
        props: {
            recipies: data.data,
        },
        revalidate: 10,
    };
};

export default RecipieList;
