const express = require('express');
const router = express.Router();
const Dp = require('../models/dp.model');
const fetch = require('node-fetch');

let url = "https://api.wazirx.com/api/v2/tickers";

router.get('/', (req,res) => {

    Dp.deleteMany({})
        .then(res1 => {
            console.log("DELETED");
        })
        .catch(err => console.log(err))

    fetch(url, {method: "Get" })
        .then(res1 => res1.json())
        .then(res2 => {
            let x=0;
            var data=[];
            for(var r in res2) 
            {
                const ob = new Dp({
                    "index": x+1,
                    "name": res2[r].name,
                    "last": res2[r].last,
                    "buy": res2[r].buy,
                    "sell": res2[r].sell,
                    "volume": res2[r].volume,
                    "base_unit": res2[r].base_unit
                })
                // console.log(res2[r]);
                data.push(ob);
                x++;
                if(x===10)
                    break;
            }
            // console.log("data: " + data);
            Dp.insertMany(data)
            .then(res3=> {
                Dp.find({})
                .then(result => {
                    console.log(result.length);
                    res.render('hodlinfo', {data: result});
                })
                .catch(err => console.log(err));
            })
        })
        .catch(err => console.log(err));
})


module.exports = router;