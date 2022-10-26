import Axios from "axios";
import CoinsList from "../components/CoinsList";

const home = ({ coins }) => {

  return (
    <div >
      <CoinsList coins={coins} />
    </div>
  )
};

export const getStaticProps = async () => {
  const data = await Axios.get('https://api.coinstats.app/public/v1/coins?skip=0');
  return {
    props: {
      coins: data.data,
    },
  };
};

export default home;
