import { useState, useEffect } from "react";


// const MyOption = props => {
//     const {name, value} = props || {};  

//     return (<option key={index} name={index}  value={coin.quotes.USD.price}>
//     {index+1}.{coin.name} ({coin.symbol} : ${coin.quotes.USD.price}USD)
// </option>)
// }

function CoinChange () {
    const [ loading, setLoading ] = useState(true);
    const [ coins, setCoins ] = useState([]);
    const [ coindex, setCoindex ] = useState(0);
    const [ myMoney, setMyMoney ] = useState(0);
    const onSelect = (event) => {
        //console.log(event.target.key) // 이게 값이 안나옴
        //console.dir(event.target.index); // 이건 또 왜 안돼 ㅠㅠ
        //console.log(event.target);
        setCoindex(event.target.value);
    };
    const onChange = (event) => setMyMoney(event.target.value)
    const onClick = () => {
        console.log(myMoney)
        //console.log(typeof(myMoney))
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                //setCost(json[0].quotes.USD.price)
            })
    }, [])
    return (
        <div>
            {loading ? 
                // 로딩 중 일 때
                <div>
                    <h1>The Coins !</h1>
                    <strong>Loading...</strong>
                </div>
                // 로딩이 완료 되었을 때
                    : 
                (
                <div>
                    <h1>The Coins !({coins.length})</h1>    
                    <label htmlFor="pay">환전 금액을 입력하세요($).</label>
                    <input 
                        defaultValue={myMoney}
                        onChange={onChange}
                        type="number" 
                        placeholder="How much $ do you exchange?"/>
                    <button onClick={onClick}>값 확인</button>
                    <div>
                        <label htmlFor="coin">코인을 선택하세요.</label>
                        <select id="coin" onChange={onSelect}>
                            {coins.map((coin, index) => (
                                <option key={index+1} value={index}>
                                    {index+1}.{coin.name} ({coin.symbol} : ${coin.quotes.USD.price}USD)
                                </option>
                                //<MyOption key={index} index={index}  />
                            ))}
                        </select>
                        <div>받으실 수 있는 코인은 {coins[coindex].symbol} {(Math.floor(myMoney/coins[coindex].quotes.USD.price) > 0) ? Math.floor(myMoney/coins[coindex].quotes.USD.price) : 0  }개 입니다.</div>
                    </div>
                </div>
                )
            }          
            
        </div>
    )
}
/* // 코인API 불러와서 리스타화 한 코드
    <ul>    
        {coins.map((coin) => (
            <li>
                {coin.name} ({coin.symbol} : ${coin.quotes.USD.price}USD)
            </li>
        ))}
    </ul>
*/
export default CoinChange;