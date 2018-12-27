# NAME OF PROJECT
(Name of Project) is a Node.JS based web API that delivers images dynamically to the client according to the given URL parameters in the requested link. 


## Possibilities
By default, the image delivered to (name of project).com with no URL params will be the following image:


### Width & Height
Clients can supply a width and height for the image delivered. By default the units are in px.

```
(nameofproject).com?width=150&height=300
```

### Background Color
Clients can specify a background color by giving a hex code or one of the possible names of colors (see Table 1). Be default the background will be grey (hex code).

| Name of Color | Hex Code Equivalent | Color  |
| ------------- |:-------------:      | -----:|
| black         | #000000             | <div style="background-color: #000000; height: 25px; width: 25px></div>" |
| white         | #FFFFFF             | <div style="background-color: #FFFFFF; height: 25px; width: 25px></div>" |
| grey          | #808080             | <div style="background-color: #808080; height: 25px; width: 25px></div>" |
| red           | #FF0000             | <div style="background-color: #FF0000; height: 25px; width: 25px></div>" |
| green         | #008000             | <div style="background-color: #008000; height: 25px; width: 25px></div>" |
| blue          | #0000FF             | <div style="background-color: #0000FF; height: 25px; width: 25px></div>" |

```
(nameofproject).com?width=150&height=300&color=black
(nameofproject).com?width=150&height=300&color=#000000
```

### Custom Text
By default, the text displayed will be the dimensions of the image. The text can be overriden by specifying in the URL params:

```
(nameofproject).com?width=150&height=300&color=black&text=none
(nameofproject).com?width=150&height=300&color=#000000&text=Hello+World
```

