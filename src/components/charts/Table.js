import {useCallback, useEffect, useState } from "react";
import './Table.scss'

function TableTwo() {
    const [crypto, setCrypto] = useState([]);
    const  apiUrl = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`
     const  fetchCrypto = useCallback(async () => {
       const url = apiUrl
       const response = await fetch(url)
       const data = await response.json()
       setCrypto(data.coins)
    }, [apiUrl]);

     useEffect(() => {
      fetchCrypto();
    }, [fetchCrypto])
  
  return (
 <div style={{overflowX: 'auto'}}>
  <table>
    <tr className="tablehead">
      <th className="cell">Rank</th>
      <th className="cell">Name</th>
      <th className="cell">Price</th>
      <th className="cell">Market Cap</th>
      <th className="cell">Volume(24h)</th>
      <th className="cell">Available Supply</th>
    </tr>

    {crypto.map(({ id, icon, marketCap, name, price, availableSupply, volume, rank, websiteUrl, symbol }) => (
            <tr key={id}>
              <td>{rank}</td>
              <td className="tableFlex">
                    <div className="icon-cont">
                      <a href={websiteUrl}>
                        <img src={icon} alt="logo" className="icon" />
                      </a>
                    </div>
                      <div className="name-cont">
                         <p className="name">{name}</p>
                       </div>
              </td>
              <td className="number">${price.toFixed(2)}</td>
              <td className="number">${marketCap}</td>
              <td className="number">${volume.toFixed(0)}</td>
              <td className="number">{availableSupply}</td> 
            </tr>
          ))}
  </table>
</div>

  );
}

export default TableTwo;
