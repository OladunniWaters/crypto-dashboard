import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//import rows from "./rowsData";
import './Table.scss'
import { useEffect, useState } from "react";

export default () => (
  
  
    const [crypto, setCrypto] = useState([]);
 
  // Fetching crypto data from the API only
  // once when the component is mounted
  
Apiurl = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`
   
  
  
  <div>

    <Paper className="container">
      <Table>
        <TableHead className="tablehead">
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Available Supply</TableCell>
            <TableCell>Volume(24hrs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crypto.map(({item}) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                 <a href={item.websiteUrl}>
                        <img src={item.icon} alt="logo" width="30px" />
                 </a>
                {item.name}
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.marketCap}</TableCell>
              <TableCell>{item.price.toFixed(2)}</TableCell>
              <TableCell>{item.availableSupply}</TableCell>
              <TableCell>{item..volume.toFixed(0)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
