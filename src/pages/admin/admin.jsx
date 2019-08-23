import React, {useEffect, useState} from 'react'

import './admin.css'
import api, {staticFilesPath} from '../../main/api'
import JobsList from './jobsList'
import SelectedJob from './selectedJob'


export default props => {
    
    const [jobType, setJobType] = useState('')
    const [jobsList, setJobsList] = useState([])
    const [selectedJob, setSelectedJob] = useState('')

    async function getJobsList(){
        if(!jobType) return
        try{
            const response = await api.get(`/${jobType}`)
            setJobsList(response.data)
        }catch(err){
            setJobsList([])
        }
    }
    
    function changeJobType(type){
        setSelectedJob('')
        setJobsList([])
        setJobType(type)
    }

    async function getSelectedJob(id){
        const respose = await api.get(`/${jobType}/${id}`)
        setSelectedJob(respose.data)
    }

    async function updateJob(e){
        e.preventDefault()
        const { description, project, customer, isdone, _id } = selectedJob
        await api.put(`/${jobType}`, {
            _id,
            description,
            customer,
            project,
            isdone
        })
        setSelectedJob('')
        getJobsList()
    }

    async function deleteJob(id){
        await api.delete(`/${jobType}/${id}`)
        getJobsList()
    }

    async function createJob(){
        const response = await api.post(`/${jobType}`)
        setSelectedJob(response.data)
    }

    async function uploadThumbnail(e){
        let files = e.target.files
        let targetEl = e.target

        const formData = new FormData();
        formData.append('myFile', files[0])
        const response = await api.post(`/${jobType}/${selectedJob._id}/uploadthumbnail`, formData, {headers: { 'content-type': 'multipart/form-data'}})
        setSelectedJob({...selectedJob, thumbnail: `${staticFilesPath}/${response.data.filename}`})
        targetEl.value =''
    }

    async function uploadGallery(e){
        let files = e.target.files
        let targetEl = e.target

        const formData = new FormData();
        formData.append('myFile', files[0])
        const response = await api.post(`/${jobType}/${selectedJob._id}/uploadfile`, formData, {headers: { 'content-type': 'multipart/form-data'}})
        setSelectedJob({...selectedJob, gallery: [...selectedJob.gallery, `${staticFilesPath}/${response.data.filename}`]})
        targetEl.value =''
    }

    useEffect(() =>{
        !jobType && setJobType('motions')
        getJobsList()
    }, [jobType])

    return(
        <>
            <div className='pageMargin'>
                <div className='selectionMenu'>
                    <input type="button" value="Motions"
                        onClick={e => changeJobType('motions')}
                    />
                    <input type="button" value="Ilustrations"
                        onClick={e => changeJobType('ilustrations')}
                    />
                    <input type="button" value="Designs"
                        onClick={e => changeJobType('designs')}
                    />
                </div>
                {
                    !selectedJob ?
                    (
                        <>
                            <h1 className='adminJobTitle'>{jobType}</h1>
                            <ul className='adminJobsList'>
                            {
                                <JobsList jobsList={jobsList} 
                                    deleteJob={deleteJob} 
                                    getSelectedJob={getSelectedJob} 
                                    createJob={createJob}
                                />
                            }
                            </ul>
                        </>
                    )
                    :
                    (
                        <SelectedJob selectedJob={selectedJob} 
                            setSelectedJob={setSelectedJob} 
                            uploadGallery={uploadGallery} 
                            uploadThumbnail={uploadThumbnail} 
                            updateJob={updateJob}
                        />
                    )

                }
            </div>
        </>
    )
}