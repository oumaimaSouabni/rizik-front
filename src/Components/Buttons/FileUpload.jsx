import React from 'react'

export default function FileUpload() {
    return (
        <div>
            <div class="slds-form-element">
            <span class="slds-form-element__label" id="file-selector-primary-label">Attachment</span>
            <div class="slds-form-element__control">
                <div class="slds-file-selector slds-file-selector_files">
                <div class="slds-file-selector__dropzone">
                    <input type="file" class="slds-file-selector__input slds-assistive-text" accept="image/png" id="file-upload-input-01" aria-labelledby="file-selector-primary-label file-selector-secondary-label" />
                    <label class="slds-file-selector__body" for="file-upload-input-01" id="file-selector-secondary-label">
                    <span class="slds-file-selector__button slds-button slds-button_neutral">
                        <svg class="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        </svg>Upload Files</span>
                    <span class="slds-file-selector__text slds-medium-show">or Drop Files</span>
                    </label>
                </div>
                </div>
            </div>
            </div>              
        </div>
    )
}
