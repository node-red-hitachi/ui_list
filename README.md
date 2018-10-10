node-red-contrib-ui_list
========================

Node-RED widget node for showing items list


Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-ui_list

Example
-------
```
[{"id":"252a222f.9c195e","type":"tab","label":"Example of ui_list","disabled":false,"info":""},{"id":"45d84b23.12b944","type":"ui_list","z":"252a222f.9c195e","group":"a7752256.7bbf4","name":"","order":0,"width":"6","height":"5","x":250,"y":100,"wires":[["4e54772a.8b5108"]]},{"id":"485f5e24.29948","type":"inject","z":"252a222f.9c195e","name":"","topic":"","payload":"[{\"title\":\"Item1\",\"description\":\"This is description of Item1\"},{\"title\":\"Item2\",\"description\":\"This is description of Item2\"},{\"title\":\"Item3\",\"description\":\"This is description of Item3\"},{\"title\":\"Item4\",\"description\":\"This is description of Item4\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":100,"wires":[["45d84b23.12b944"]]},{"id":"4e54772a.8b5108","type":"debug","z":"252a222f.9c195e","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":410,"y":100,"wires":[]},{"id":"a7752256.7bbf4","type":"ui_group","z":"","name":"Default","tab":"9d25a4f9.062e18","disp":true,"width":"6","collapse":false},{"id":"9d25a4f9.062e18","type":"ui_tab","z":"","name":"List","icon":"dashboard"}]
```
