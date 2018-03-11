var rollingAvg = new Array(100).fill(0);
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
        skyEl.components.material.material = new THREE.MeshBasicMaterial();
       
    }

});