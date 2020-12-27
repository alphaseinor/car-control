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
CODING=
```

## api example data
### GET /api

```

{
    coding: 47
    circuit: [
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "on"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
        {
            error: "none",
            state: "disabled"
        },
    ] 
}

```

### POST /api/circuit/0

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
    error: "cannot disable, update coding value to enable this circuit", 
    state: "disabled"
}

```

if circuit did not return correctly 

```

{
    error: "state did not change",
    state: "on"
}

```