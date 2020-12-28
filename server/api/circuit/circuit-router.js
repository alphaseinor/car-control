var Gpio = require('onoff').Gpio
const router = require('express').Router()

let state = {
    coding: parseInt(process.env.CODING),
    circuit: [] 
}


let LED = [
    new Gpio(4, 'out'),
    new Gpio(11, 'out'),
    new Gpio(12, 'out'),
    new Gpio(13, 'out'),
    new Gpio(15, 'out'),
    new Gpio(16, 'out'),
    new Gpio(18, 'out'),
    new Gpio(22, 'out'),
    new Gpio(29, 'out'),
    new Gpio(31, 'out'),
    new Gpio(32, 'out'),
    new Gpio(33, 'out'),
    new Gpio(35, 'out'),
    new Gpio(36, 'out'),
    new Gpio(37, 'out'),
    new Gpio(38, 'out')
]

//initialize 16 circuit states to off or disabled
for(let i = 15; i >= 0; i--){
    //{
    //     error: "none",
    //     state: "disabled"
    // }
    LED[i].writeSync(0)
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


const checkBody = (req, res, next) => {
    if(!req.body.state){
        console.log("checkBody: missing state in body")
        res.status(500).json({error : "missing state in body"})
    }
    next()
} 

router.post('/:id', checkBody, async (req, res) =>{
    const id = req.params.id
    if(req.body.state == "on"){
        console.log(`circuit ${id} is now on`)
        LED[id].writeSync(1)
        state.circuit[id].state = "on"
        res.status(200).json({error: "none", state: "on"})
    }else{
        console.log(`circuit ${id} is now off`)
        LED[id].writeSync(0)
        state.circuit[id].state = "off"
        res.status(200).json({error: "none", state: "off"})
    }
})

router.get('/:id')

module.exports =  { router }