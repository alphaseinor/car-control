# car-control server

## dotenv file

### CODING
* +1 = circuit 0 (brakes, headlight)
* +2 = circuit 1 (marker)
* +4 = circuit 2 (flasher)
* +8 = circuit 3 (reverse, high beam)
---
* +16 = circuit 4 (fog light, rear fog)
* +32 = circuit 5 (horn)
* +64 = circuit 6 (optional)
* +128 = circuit 7 (optional)
---
* +256 = circuit 8 (optional)
* +512 = circuit 9 (optional)
* +1024 = circuit 10 (optional)
* +2048 = circuit 11 (optional)
---
* +4096 = circuit 12 (optional)
* +8192 = circuit 13 (optional)
* +16384 = circuit 14 (optional)
* +32768 = circuit 15 (optional)

Module with circuits: 
* 0 headlight
* 1 marker light
* 2 flasher
* 3 high beam
* 5 horn

```

0000 0000 0010 1111 = the coding for this module would be 47
^^^^ ^^^^ ^^^^ ^^^^
|||| |||| |||| ||||
|||| |||| |||| |||+-= Headlight (connected)
|||| |||| |||| ||+--= Marker (connected)
|||| |||| |||| |+---= Flasher (connected)
|||| |||| |||| +----= High Beam (connected)
|||| |||| |||+------= Fog Light (not connected)
|||| |||| ||+-------= Horn (connected)
|||| |||| |+--------= optional (not connected)
|||| |||| +---------= optional (not connected)
|||| |||+-----------= optional (not connected)
|||| ||+------------= optional (not connected)
|||| |+-------------= optional (not connected)
|||| +--------------= optional (not connected)
|||+----------------= optional (not connected)
||+-----------------= optional (not connected)
|+------------------= optional (not connected)
+-------------------= optional (not connected)
```

```
CODING=47
```

## api example data
### GET /circuit

```

{
    coding: 47,
    circuit: [
        {
            circuit: 0,
            error: "none",
            state: "on"
        },{
            circuit: 1,
            error: "none",
            state: "on"
        },{
            circuit: 2,
            error: "none",
            state: "on"
        },{
            circuit: 3,
            error: "none",
            state: "on"
        },{
            circuit: 5,
            error: "none",
            state: "on"
        }
    ] 
}

```

### POST /api/circuit/0

State key can be set to "on", "off", or "flashing" using POST on all enabled circuits. It will not give feedback to existing state other than "disabled"

Posting data:

```

{
    state: "off"
}

```
return data:

```

{
    error: "none",
    state: "off"
}


```


if state: "disabled" return 

```

{
    error: "State is disabled on circuit 0, you must recode module to allow this output to be used"
}

```



## Circuits

| Circuit | GPIO# | Pin on rPi |
| ------- | ----- | ---------- |
| 0 | 4 | 7 |
| 1 | 17 | 11 |
| 2 | 18 | 12 |
| 3 | 27 | 13 |
| 4 | 22 | 15 |
| 5 | 23 | 16 |
| 6 | 24 | 18 |
| 7 | 25 | 22 |
| 8 | 5 | 29 |
| 9 | 6 | 31 |
| 10 | 12 | 32 |
| 11 | 13 | 33 |
| 12 | 19 | 35 |
| 13 | 16 | 36 |
| 14 | 26 | 37 |
| 15 | 20 | 38 |
