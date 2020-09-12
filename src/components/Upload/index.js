import React, { Component } from 'react';

import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage} from './styles'

export default class Upload extends Component {
    renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive){
            return <UploadMessage>Drag And Drop your images...</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error">Only images!!!</UploadMessage>
        }
        
        return <UploadMessage type="success">Drop your images</UploadMessage>
    }

    render(){
        const {onUpload} = this.props;

        return (
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                {({getInputProps, getRootProps, isDragActive, isDragReject}) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />

                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>

                )}
            </Dropzone>
        );
    }
}