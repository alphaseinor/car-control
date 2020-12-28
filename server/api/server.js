const express = require('express');
require('dotenv').config();

const server = express();

server.use(express.json());

let state = {
    coding: parseInt(process.env.CODING),
    circuit: [] 
}



//initialize 16 circuit states to off or disabled
for(let i = 16; i >= 0; i--){
    //{
    //     error: "none",
    //     state: "disabled"
    // }
    if(state.coding - Math.pow(2,i) >= 0){
        state.coding = state.coding - Math.pow(2,i)
        state.circuit = [...state.circuit, 
            {
                error: "none",
                state: "off"
            }
        ]
    } else {
        state.circuit = [...state.circuit, 
            {
                error: "none",
                state: "disabled"
            }
        ]
    }

}

state.circuit = state.circuit.reverse()
state.coding = parseInt(process.env.CODING)
console.log(state)



server.use('/', (req, res)=>{
  res.status(200).json({error: false, state: state})
})


module.exports = server;