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
[{"id":"6bc016fc.3f0408","type":"tab","label":"Flow 3","disabled":false,"info":""},{"id":"e9e278d3.414e78","type":"ui_list","z":"6bc016fc.3f0408","group":"947baedc.f770f","name":"","order":0,"width":"6","height":"5","x":430,"y":100,"wires":[["fdab3f2b.d9699"]]},{"id":"9474efaf.2b407","type":"template","z":"6bc016fc.3f0408","name":"","field":"payload","fieldType":"msg","format":"json","syntax":"mustache","template":"[\n    {\n        \"title\": \"Item1\",\n        \"description\": \"This is description of Item1\"\n    },\n    {\n        \"title\": \"Item2\",\n        \"description\": \"This is description of Item2\"\n    },\n    {\n        \"title\": \"Item3\",\n        \"description\": \"This is description of Item3\"\n    },\n    {\n        \"title\": \"Item4\",\n        \"description\": \"This is description of Item4\"\n    }\n]\n","output":"json","x":280,"y":100,"wires":[["e9e278d3.414e78"]]},{"id":"388b3b1d.2812f4","type":"inject","z":"6bc016fc.3f0408","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":120,"y":100,"wires":[["9474efaf.2b407"]]},{"id":"fdab3f2b.d9699","type":"debug","z":"6bc016fc.3f0408","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":580,"y":100,"wires":[]},{"id":"947baedc.f770f","type":"ui_group","z":"","name":"Default","tab":"e35a298a.380b78","disp":true,"width":"6","collapse":false},{"id":"e35a298a.380b78","type":"ui_tab","z":"","name":"List","icon":"dashboard"}]
```
