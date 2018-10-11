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
[{"id":"8a9a24c0.00f5f8","type":"tab","label":"Example of ui_list","disabled":false,"info":""},{"id":"187bc9d3.2e3f46","type":"ui_list","z":"8a9a24c0.00f5f8","group":"6d50923f.f0b49c","name":"","order":0,"width":"6","height":"5","lineType":"three","allowClick":false,"allowHTML":true,"x":250,"y":100,"wires":[["e6cff92d.0d4608"]]},{"id":"877c3a86.9420d8","type":"inject","z":"8a9a24c0.00f5f8","name":"","topic":"","payload":"[{\"title\":\"<i class=\\\"fa fa-circle\\\"></i> Item1\",\"description\":\"<i class=\\\"fa fa-home\\\"></i> This is description of Item1\"},{\"title\":\"<b>Item2 with long long long long long text</b>\",\"description\":\"This is description of Item2\"},{\"title\":\"<i>Item3</i>\",\"description\":\"<font color=\\\"red\\\">This is description of Item3 with long long long long long text</font>\"},{\"title\":\"Item4 with long long long long long text\",\"description\":\"This is description of Item4 with long long long long long text\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":100,"wires":[["187bc9d3.2e3f46"]]},{"id":"e6cff92d.0d4608","type":"debug","z":"8a9a24c0.00f5f8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":410,"y":100,"wires":[]},{"id":"6d50923f.f0b49c","type":"ui_group","z":"","name":"Default","tab":"59347384.6ececc","disp":true,"width":"6","collapse":false},{"id":"59347384.6ececc","type":"ui_tab","z":"","name":"List","icon":"dashboard"}]
```
