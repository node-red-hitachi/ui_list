node-red-contrib-ui_list
========================

Node-RED widget node for showing items list.

![Example](figs/sample00.png)


Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-ui_list

Example
-------

```
[{"id":"c094feb3.d5096","type":"tab","label":"Example of ui_list","disabled":false,"info":""},{"id":"62ff982f.b1acd8","type":"ui_list","z":"c094feb3.d5096","group":"1f180e28.68f0f2","name":"","order":1,"width":"6","height":"4","lineType":"three","actionType":"click","allowHTML":true,"showIcon":true,"x":290,"y":100,"wires":[["be7dad8a.f7336"]]},{"id":"4d9980d0.32faa","type":"inject","z":"c094feb3.d5096","name":"Fruits","topic":"","payload":"[{\"title\":\"<b>Apple</b>\",\"description\":\"This is description of <font color=\\\"red\\\"><b>Apple</b></b>.\",\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/500px-Red_Apple.jpg\"},{\"title\":\"<b>Banana</b>\",\"description\":\"This is description of <font color=\\\"yellow\\\"><b>Banana</b></font>(no picture).\",\"icon\":null},{\"title\":\"<b>Orange</b>\",\"description\":\"This is description of <font color=\\\"orange\\\"><b>Orange</b></font>.\",\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/440px-Ambersweet_oranges.jpg\"},{\"title\":\"<b>Watermelon</b>\",\"description\":\"This is description of <font color=\\\"green\\\"><b>Watermelon</b></font>.\",\"icon\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vampire_watermelon.jpg/440px-Vampire_watermelon.jpg\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":100,"wires":[["62ff982f.b1acd8"]]},{"id":"be7dad8a.f7336","type":"debug","z":"c094feb3.d5096","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":450,"y":100,"wires":[]},{"id":"52890338.fe6dcc","type":"inject","z":"c094feb3.d5096","name":"WiFi","topic":"","payload":"[{\"title\":\"No WiFi Signal\",\"description\":\"Lost network connection\",\"icon_name\":\"signal_wifi_0_bar\"},{\"title\":\"Weak WiFi Signal\",\"description\":\"May lose network connection\",\"icon_name\":\"signal_wifi_2_bar\"},{\"title\":\"Strong WiFi Signal\",\"description\":\"Connected to network\",\"icon_name\":\"signal_wifi_4_bar\"}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":180,"wires":[["48d0cae.b63ef34"]]},{"id":"86b509da.e1fa78","type":"ui_list","z":"c094feb3.d5096","group":"1f180e28.68f0f2","name":"","order":3,"width":"4","height":"7","lineType":"one","actionType":"check","allowHTML":false,"showIcon":false,"x":290,"y":260,"wires":[["ea9005aa.aee808"]]},{"id":"9dd58d37.d628a","type":"inject","z":"c094feb3.d5096","name":"Day of Week","topic":"","payload":"[{\"title\":\"Sunday\",\"isChecked\":true},{\"title\":\"Monday\"},{\"title\":\"Tuesday\"},{\"title\":\"Wednesday\"},{\"title\":\"Thursday\"},{\"title\":\"Friday\"},{\"title\":\"Saturday\",\"isChecked\":true}]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":130,"y":260,"wires":[["86b509da.e1fa78"]]},{"id":"ea9005aa.aee808","type":"debug","z":"c094feb3.d5096","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":450,"y":260,"wires":[]},{"id":"48d0cae.b63ef34","type":"ui_list","z":"c094feb3.d5096","group":"1f180e28.68f0f2","name":"","order":2,"width":"6","height":"5","lineType":"two","actionType":"none","allowHTML":true,"showIcon":true,"x":290,"y":180,"wires":[["c9aa5c92.fefec"]]},{"id":"c9aa5c92.fefec","type":"debug","z":"c094feb3.d5096","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":450,"y":180,"wires":[]},{"id":"1f180e28.68f0f2","type":"ui_group","z":"","name":"Default","tab":"5eda735f.8acbec","disp":true,"width":"12","collapse":false},{"id":"5eda735f.8acbec","type":"ui_tab","z":"","name":"List","icon":"dashboard"}]
```
