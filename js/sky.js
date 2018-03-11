var rollingAvg = new Array(100).fill(0);
for(var x = -5; x < 5; x++)
    for(var z = -5; z < 5; z++) {
        var cloud = document.createElement("a-entity");
        var obj = document.createAttribute("obj-model");
            obj.value = "obj: #cloud; mtl: #cloud-mtl";
        var position = document.createAttribute("position");
        position.value = Math.random() * x * 10 + ' ' + 8 + ' ' + Math.random() * z * 10;
        cloud.setAttributeNode(obj);
        cloud.setAttributeNode(position);

        document.getElementById('scene').appendChild(cloud);
    }

AFRAME.registerComponent('sky', {
   
    schema: {
        analyserEl: {type: 'selector'},
        el: {type: 'selector'}
    },

    tick: function (time) {

        //ocean
        var analyserEl = this.data.analyserEl;
        var analyserComponent;
        var volume;

        //sky
        var skyEl = this.data.el;

        analyserComponent = analyserEl.components.audioanalyser;
        if (!analyserComponent.analyser) { return; }

        volume = analyserComponent.volume;

        rollingAvg.splice(0, 0, volume);
        rollingAvg.pop();

        var avg = rollingAvg.reduce(function (a, b) { return a + b; }) / rollingAvg.length;
        // console.log(avg);
        var clouds = document.getElementsByClassName("cloud");

        skyEl.components.material.material = new THREE.MeshBasicMaterial();
       
    }

});