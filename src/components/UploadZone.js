import React, { Component } from "react"
import Dropzone from "react-dropzone"

class UploadZone extends Component {
    constructor(props) {
        super(props)

        this.state = {
            files: [],
            file_upload_state: false
        }

        this.onDrop = this.onDrop.bind(this)
    }
    onDrop(files) {
        this.props.onDrop(files)
    }
    render() {
        return(
            <div className="Test">
                <Dropzone onDrop={this.onDrop} accept="audio/mp3">
                    <p>Drop your audio file here</p>
                </Dropzone>
                <p>
                    {
                        this.state.file_upload_state ? (
                            <div>
                                <p>A file has been uploaded</p>
                            </div>
                        ) : (
                            <div>
                                <p>No file has been uploaded yet</p>
                            </div>
                        )
                    }
                </p>
            </div>
        )
    }
}

export default UploadZone