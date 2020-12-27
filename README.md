# car-control
The idea is to improve on the existing wiring in an automotive application. 

This is one approach to controlling automotive lighting (headlights, tail lights, etc) from a central raspberry pi, utilizing one raspberry pi for each node. 

---

### ethernet based client/server
currently this will be configured for a 192.168.0.x/48 address scheme

192.168.0.1 - diagnostic computer

192.168.0.2 - client (dash module)

192.168.0.3 - server (left taillight module)

192.168.0.4 - server (right taillight module)

192.168.0.5 - server (left headlight module)

192.168.0.6 - server (right headlight module)

### web based client
We will use a web based client in order for easier design and interface to the vehicle.

A raspberry pi will be used, so we can have GPIO pins for inputs and outputs for the dash. such as illumination output, brake input, turn indicators, hand brake engagement input, etc

At this time we will not control non body module items such as engine starter, cruise control inputs, throttle inputs, speed inputs, rpm inputs, or other items specific to a vehicle.

We may look into these at a future date. 


### REST API servers
* Will use a standard REST API PUT and GET for each control

i.e 

A PUT request to ``` /api/headlight ``` would change the state of the headlight to on or off as commanded by the client. 

A GET request to ``` /api/ ``` would get a json object with all available controls, and their current state

---

## Current body wiring technology
* uses a common ground on the chassis
* uses "home runs" for each lighting element
* multi strand wiring harness
* sometimes mixed twisted pair(s) CAN or K-line data harness
* sometimes mixed with fiber optic
* uses discrete switches for everything in the lighting and body electric system, from brake switches, to all lighting. 

### Current body wiring technology advantages
* Known quantity, has been improved on for many years
* Well documented diagrams and technology to document the diagrams (VW's line diagrams come to mind)
* Ground is everywhere, easy to find connection points for grounding any device
* Low cost to build basic halogen headlight modules, incandescent tail light modules, or other "nodes"

### Current body wiring technology disadvantages
* Ground is typically tied to the chassis, this makes it impossible to use the body as a high voltage ground.
* Long runs dependent on large switch contacts, or load reduction relays. 
* Harder to control with software due to high load. 
* Very difficult to install a flopping harness during vehicle assembly

---

## proposed body wiring technology
* Uses an isolated ground and positive for low voltage (12v) wiring.
* Ground (optional) and power are a solid metal bus
* positive lead has main fuse to 12v power supply (battery). 
* Has "home runs" for data only

### Proposed body wiring technology advantages
* Unknown quantity, this is the first experiment using this approach to body wiring technology I have discovered as of 12/17/2020
* No need to document complicated wiring, just document main fuse, and connecting points on solid rails for power and ground. 
* Chassis ground is isolated, can be used for other purposes, like heat sink, or high voltage ground.
* Low cost of assembly 
* Rails could easily be installed by robotics during chassis manufacturing process. 
* Nodes can be attached by screw terminals for high load applications, or regular automotive grade connections. 
* low voltage switches, or software switches can be used instead of complicated mechanical switches
* load reduction relays are not needed, only node based relays. 
* software programable PWM LEDs can be used extensively instead of incandescent lighting. 
* software voltage detection can be used extensively

### proposed body wiring technology disadvantages
* Dependent on data runs for lights to work. 
* May not be legal in some countries?
* Requires a different troubleshooting mindset
* Affordances for assembly, crash protection, and guaranteed isolation must be integrated in the design of the vehicle, 
* Not likely this design will be able to safely retrofit to an existing floppy harness design. 
* Firefighting signifiers need to be installed, possibly training on "which wire to cut"
