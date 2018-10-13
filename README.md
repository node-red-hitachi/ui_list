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
[{"id":"8a9a24c0.00f5f8","type":"tab","label":"Example of ui_list","disabled":false,"info":""},{"id":"187bc9d3.2e3f46","type":"ui_list","z":"8a9a24c0.00f5f8","group":"6d50923f.f0b49c","name":"","order":0,"width":"6","height":"5","lineType":"two","allowClick":true,"allowHTML":true,"showIcon":true,"x":250,"y":100,"wires":[["e6cff92d.0d4608"]]},{"id":"877c3a86.9420d8","type":"inject","z":"8a9a24c0.00f5f8","name":"Fruits","topic":"","payload":"[{\"title\":\"<b>Apple</b>\",\"description\":\"This is description of <font color=\\\"red\\\"><b>Apple</b></b>.\",\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/500px-Red_Apple.jpg\"},{\"title\":\"<b>Banana</b>\",\"description\":\"This is description of <font color=\\\"yellow\\\"><b>Banana</b></font>(no picture).\"},{\"title\":\"<b>Orange</b>\",\"description\":\"This is description of <font color=\\\"orange\\\"><b>Orange</b></font>.\",\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/440px-Ambersweet_oranges.jpg\"},{\"title\":\"<b>Watermelon</b>\",\"description\":\"This is description of <font color=\\\"green\\\"><b>Watermelon</b></font>.\",\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vampire_watermelon.jpg/440px-Vampire_watermelon.jpg\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":100,"wires":[["187bc9d3.2e3f46"]]},{"id":"e6cff92d.0d4608","type":"debug","z":"8a9a24c0.00f5f8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":410,"y":100,"wires":[]},{"id":"64ebc713.983ee8","type":"inject","z":"8a9a24c0.00f5f8","name":"WiFi","topic":"","payload":"[{\"title\":\"No WiFi Signal\",\"description\":\"Lost network connection\",\"icon_name\":\"signal_wifi_0_bar\"},{\"title\":\"Weak WiFi Signal\",\"description\":\"May lose network connection\",\"icon_name\":\"signal_wifi_2_bar\"},{\"title\":\"Strong WiFi Signal\",\"description\":\"Connected to network\",\"icon_name\":\"signal_wifi_4_bar\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":180,"wires":[["187bc9d3.2e3f46"]]},{"id":"6d50923f.f0b49c","type":"ui_group","z":"","name":"Default","tab":"59347384.6ececc","disp":true,"width":"6","collapse":false},{"id":"59347384.6ececc","type":"ui_tab","z":"","name":"List","icon":"dashboard"}]
```
