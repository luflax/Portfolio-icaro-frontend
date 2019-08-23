import React from 'react'
import {faPlus, faPen, faTrash, faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import api from '../../main/api'
import './selectedJob.css'
import MaskIcon from '../../components/maskIcon'

export default props => {
    return(
        <>
            <h1>Thumbnail</h1>
            <input type="file" id="adminThumbnail" className='inputFile'
                onChange={e => props.uploadThumbnail(e)}
            />
            <label htmlFor="adminThumbnail">
            {
                props.selectedJob.thumbnail != 'none' ?
                (

                    <MaskIcon icon={faPen} color='blue'>
                        <img src={`${api.defaults.baseURL}/${props.selectedJob.thumbnail}`} />
                    </MaskIcon>
                    
                ) : ''
            }
            </label>

            <h1>Gallery</h1>
            <div className='galleryFiles'>
                {
                    props.selectedJob.gallery.map((file, index) => {
                        const splittedFileName = file.split('.')
                        const fileExtension = splittedFileName[splittedFileName.length - 1]

                        
                        if(fileExtension == 'mp4')
                            return ''
                        else
                            return (
                                    <MaskIcon key={index} icon={faTrash} color='red'>
                                        <img src={`${api.defaults.baseURL}/${file}`} />
                                    </MaskIcon>
                                )
                    }
                    )
                }
                <input type="file" id="adminGallery" className='inputFile'
                onChange={e => props.uploadGallery(e)}
                />
                <label htmlFor="adminGallery">
                    <MaskIcon icon={faPlus} color='green'>
                        <FontAwesomeIcon icon={faPlus} size='3x' />
                    </MaskIcon>
                </label>
            </div>

            <form className='adminForm' onSubmit={e => props.updateJob(e)}>
                <label htmlFor="adminCustomer">Customer:</label>
                <input id='adminCustomer' type="text" 
                    value={props.selectedJob.customer} 
                    onChange={e => props.setSelectedJob({...props.selectedJob, customer: e.target.value})}
                />
                <label htmlFor="adminProject">Project:</label>
                <input id='adminProject' type="text" 
                    value={props.selectedJob.project} 
                    onChange={e => props.setSelectedJob({...props.selectedJob, project: e.target.value})}
                />
                <label htmlFor="adminDescription">Description:</label>
                <textarea id='adminDescription' 
                    value={props.selectedJob.description} 
                    onChange={e => props.setSelectedJob({...props.selectedJob, description: e.target.value})}
                />
                <div className='formActionButtons'>
                    <input type='button' className={`privacityBtn ${props.selectedJob.isdone ? 'public' : ''}`}
                        onClick={e => props.setSelectedJob({...props.selectedJob, isdone: !props.selectedJob.isdone}) } 
                        value={props.selectedJob.isdone ? 'Public': 'Private'}
                    />
                    <input type="submit" value='Update changes'/>
                </div>
            </form>
        </>
    )
}