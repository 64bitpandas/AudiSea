import React, { Component } from "react"
import mp3 from './On My Own.mp3';

class Index extends Component {

    constructor() {
        super();
        this.state = {amplitude: 0.4};
    }

    render() {
        return(
            <div className="Index">
                <a-scene>
                    <a-assets>
                        <audio id="song" src={mp3} autoPlay loop />
                    </a-assets>

                    <a-sphere id="mouth"
                        color="#000"
                        audioanalyser="src: #song"
                        color-on-beat
                        audioanalyser-volume-scale="multiplier: 0.01"
                        position="0 1 -4"
                        side="double"
                        shader="flat"
                    ></a-sphere>

                    <a-gradient-sky material="shader: gradient; topColor: 191 96 255; bottomColor: 66 134 244;"></a-gradient-sky>

                    <a-ocean 
                        width="100" 
                        depth="100" 
                        density="90"
                        amplitude="0.1"
                        multiplier="2"
                        color="#4286f4" 
                        audioanalyser="src: #song" 
                        >
                    </a-ocean>

                    <a-camera wasd-controls-enabled="false" position="0 0 0">
                        <a-cursor color="#05ffa1"></a-cursor>
                    </a-camera>
                </a-scene>
            </div>
        )
    }
}

export default Index