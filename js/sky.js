var rollingAvg = new Array(100).fill(0);
for(var x = -15; x < 5; x++)
    for(var z = -5; z < 5; z++) {
        var cloud = document.createElement("a-entity");
        cloud.className = "cloud";
        var obj = document.createAttribute("obj-model");
            obj.value = "obj: #cloud" + Math.ceil(Math.random() * 7) + "; mtl: #cloud" + Math.ceil(Math.random()*7) + "-mtl";
        var position = document.createAttribute("position");
        position.value = Math.random() * x * 10 + ' ' + (10 + Math.random() * 2) + ' ' + Math.random() * z * 10;
        var rotation = document.createAttribute("rotation");
        rotation.value = Math.random() * 90 + ' ' + Math.random() * 90 + ' ' + Math.random() * 90;
        cloud.setAttributeNode(obj);
        cloud.setAttributeNode(position);
        cloud.setAttributeNode(rotation);

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

        var boatA = document.getElementById("boatA");


        analyserComponent = analyserEl.components.audioanalyser;
        if (!analyserComponent.analyser) { return; }

        volume = analyserComponent.volume;

        rollingAvg.splice(0, 0, volume);
        rollingAvg.pop();

        var avg = rollingAvg.reduce(function (a, b) { return a + b; }) / rollingAvg.length;
        // console.log(avg);
        var clouds = document.getElementsByClassName("cloud");
        for(var cloud of clouds) {
            cloud.setAttribute('position', (cloud.getAttribute('position').x + ((avg-0.1)/8000)) + ' ' + cloud.getAttribute('position').y + ' ' + cloud.getAttribute('position').z);
            var scale = 1 + volume/1000;
            cloud.setAttribute('scale', scale + ' ' + scale + ' ' + scale);
        }

        boatA.setAttribute("position", "-1 " + ((avg / 50)-1) + " -2");
        skyEl.components.material.material = new THREE.MeshBasicMaterial();
       
        // shift sky colors
        function round(value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
        }
        
        $("#sky").attr("color", "rgb(" + round(avg*2.3, 0) + ", 60, 136)")

    }

});