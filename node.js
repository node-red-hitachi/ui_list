/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    function HTML(allowClick) {
	var click = String.raw`ng-click="click(item)"`;
	var html = String.raw`
<md-list>
    <md-list-item class="md-2-line" ng-repeat="item in items()"`
	+(allowClick ? click : "")
	+String.raw`>
         <div class="md-list-item-text">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
        </div>
   </md-list-item>
</md-list>
`;
	return html;
    };

    var ui = undefined;
    function ListNode(config) {
        try {
            var node = this;
            if(ui === undefined) {
                ui = RED.require("node-red-dashboard")(RED);
            }
            RED.nodes.createNode(this, config);
	    var html = HTML(config.allowClick);
            var done = ui.addWidget({
                node: node,
                width: config.width,
                height: config.height,
                format: html,
                templateScope: "local",
                group: config.group,
                emitOnlyNewValues: false,
                forwardInputMessages: false,
                storeFrontEndInputAsState: false,
                convertBack: function (value) {
                    return value;
                },
                beforeEmit: function(msg, value) {
                    return { msg: { items: value } };
                },
                // needs beforeSend to message contents to be sent back to runtime 
                beforeSend: function (msg, orig) {
                    if (orig) {
                        return orig.msg;
                    }
                },
                initController: function($scope, events) {
                    $scope.items = function() {
                        var items = [];
                        if ($scope.msg && $scope.msg.hasOwnProperty("items")) {
                            items = $scope.msg.items;
                        }
                        return items;
                    };
                    $scope.click = function(item) {
                        $scope.send({payload: item});
                    };
                }
            });
        }
        catch (e) {
            console.log(e);
        }
        node.on("close", done);
    }
    RED.nodes.registerType('ui_list', ListNode);
};
