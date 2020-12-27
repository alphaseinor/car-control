# car-control server

## dotenv file

coding:
+1 = Right
+2 = Rear
+4 = circuit 0 (brakes, headlight)
+8 = circuit 1 (marker)

+16 = circuit 2 (flasher)
+32 = circuit 3 (reverse, high beam)
+64 = circuit 4 (fog light, rear fog)
+128 = circuit 5 (horn)

+256 = circuit 6 (optional)
+512 = circuit 7 (optional)
+1024 = circuit 8 (optional)
+2048 = circuit 9 (optional)

+4096 = circuit 10 (optional)
+8192 = circuit 11 (optional)
+16384 = circuit 12 (optional)
+32768 = circuit 13 (optional)

i.e.
00, 0 = left front
01, 1 = right front
10, 2 = left rear
11, 3 = right rear

left front headlight with circuits: 
* 0 headlight
* 1 marker light
* 2 flasher
* 3 high beam
* 5 horn

0000 0000 1011 1100 = 188 Your coding for this module would be 188
^^^^ ^^^^ ^^^^ ^^^^
|||| |||| |||| ||||
|||| |||| |||| |||+-= Left
|||| |||| |||| ||+--= Front
|||| |||| |||| |+=--= Headlight (connected)
|||| |||| |||| +----= Marker (connected)
|||| |||| |||+------= Flasher (connected)
|||| |||| ||+-------= High Beam (connected)
|||| |||| |+--------= Fog Light (not connected)
|||| |||| +---------= Horn (connected)
|||| |||+-----------= optional (not connected)
|||| ||+------------= optional (not connected)
|||| |+-------------= optional (not connected)
|||| +--------------= optional (not connected)
|||+----------------= optional (not connected)
||+-----------------= optional (not connected)
|+------------------= optional (not connected)
+-------------------= optional (not connected)

```
CODING=188
```

## api example data
### GET /api

{
    coding: 188
    type: "fl"
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
    ] 
}

### POST /api/circuit/0

{
    state: "off"
}

if state: "disabled", it will return error: "cannot disable, update coding" state: "disabled"