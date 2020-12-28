var Gpio = require('onoff').Gpio
const router = require('express').Router()

let state = {
    coding: parseInt(process.env.CODING),
    circuit: [] 
}


// let LED = [
    // new Gpio(4, 'out'),
    // new Gpio(17, 'out'),
    // new Gpio(18, 'out'),
    // new Gpio(27, 'out'),
    // new Gpio(22, 'out'),
    // new Gpio(23, 'out'),
    // new Gpio(24, 'out'),
    // new Gpio(25, 'out'),
    // new Gpio(5, 'out'),
    // new Gpio(6, 'out'),
    // new Gpio(12, 'out'),
    // new Gpio(13, 'out'),
    // new Gpio(19, 'out'),
    // new Gpio(16, 'out'),
    // new Gpio(26, 'out'),
    // new Gpio(20, 'out')
// ]

let LED = {
    0: 4,
    1: 17,
    2: 18,
    3: 27,
    4: 22,
    5: 23,
    6: 24,
    7: 25,
    8: 5,
    9: 6,
    10: 12,
    11: 13,
    12: 19,
    13: 16,
    14: 26,
    15: 20
}

const initGPIO = () => {
    for(let i = 0; i < 16; i++){
        if(state.circuit[i].gpio){
            state.circuit[i].gpio.writeSync(0)
        }
    }
}

//initialize 16 circuit states to off or disabled
let initState = async () => {
    for(let i = 15; i >= 0; i--){
        if(state.coding - Math.pow(2,i) >= 0){
            state.coding = state.coding - Math.pow(2,i)
            state.circuit = [...state.circuit, 
                {
                    error: "none",
                    state: "off",
                    gpio: new Gpio(LED[i + ""], 'out')
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
    return await initGPIO()
    
}

initState()

state.circuit = state.circuit.reverse()
state.coding = parseInt(process.env.CODING)
console.log(state)




const checkBody = (req, res, next) => {
    if(!req.body.state){
        console.log("checkBody: missing state in body")
        res.status(500).json({error : "missing state in body",  circuit: req.params.id})
    }else{
        if(req.params.id < 16 || req.params.id > -1){
            next()
        }else {
            console.log("checkBody: ID does not exist")
            res.status(500).json({error : "ID does not exist",  circuit: req.params.id})
        }
    }
}

const checkDisabled= (req, res, next) => {
    
    let id = req.params.id

    if(state.circuit[id].state == "disabled"){
        console.log(`checkDisabled: State is disabled on circuit ${id}, you must recode module to allow this output to be used`)
        res.status(500).json({error : `State is disabled on circuit ${id}, you must recode module to allow this output to be used`})
    }else{
        next()
    }    
}


let blinkInterval = setInterval(blinkLED, 500);

function blinkLED() {
    if(state.circuit[2].state == "on"){
        if (state.circuit[2].gpio.readSync() === 0) {
            state.circuit[2].gpio.writeSync(1)
        } else {
            state.circuit[2].gpio.writeSync(0)
        }
    }
}

// not needed because we will use this the whole time it's up
// function endBlink(id) {
//   clearInterval(blinkInterval)
//   LED[2].writeSync(0)
//   LED[2].unexport()
// }

router.post('/reset', async (req,res) => {
    await initState()
    res.status(200).json({error: "none", state})
})

router.post('/:id', checkBody, checkDisabled, async (req, res) =>{
    const id = req.params.id
    if(req.body.state == "on"){
        console.log(`circuit ${id} is now on`)
        state.circuit[id].gpio.writeSync(1)
        state.circuit[id].state = "on"
        res.status(200).json({error: "none", circuit: id, state: "on"})
    }else{
        console.log(`circuit ${id} is now off`)
        state.circuit[id].gpio.writeSync(0)
        state.circuit[id].state = "off"
        res.status(200).json({error: "none", circuit: id, state: "off"})
    }
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({error: "none", circuit: id, state: state.circuit[id]})
})

router.get('/', (req, res) => {
    res.status(200).json({error: "none", state})
})

module.exports =  { router }