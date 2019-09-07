import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft, faExpand} from '@fortawesome/free-solid-svg-icons'

import {api} from '../main/api'
import Banner from '../template/banner'
import Footer from '../template/footer'
import './jobDetailed.css'



export default props => {
    const jobTypeURL = props.match.path.split('/')[1]
    const [details, setDetails] = useState({})
    const [activeFile, setActiveFile] = useState(0)
    const [galleryFullscreen, setGalleryFullscreen] = useState(false)

    async function getJobDetails(){
        try{
            const response = await api.get(`/${jobTypeURL}/${props.match.params.id}`)
            setDetails(response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    function changeActiveFile(right){
        const totalFiles = details.gallery.length
        if(right && activeFile >= totalFiles - 1) return
        if(!right && activeFile <= 0) return

        if(right) setActiveFile(activeFile + 1)
        if(!right) setActiveFile(activeFile - 1)
    }
    useEffect(() => {
        getJobDetails()
    }, [])

    return(
        Object.keys(details).length <= 0 ? 
        <React.Fragment></React.Fragment> :
        <>
            <Banner>
                <h1>{details.customer}</h1>
            </Banner>
            <div className='pageMargin'>
                {
                    Object.keys(details).length > 0 ? (
                        <>
                            <ul className={`gallery ${galleryFullscreen ? 'galleryFullscreen' : ''}`}>
                                {details.gallery.map((file, index) => {
                                    const isActiveClass = index == activeFile ? 'fileActive' : ''
                                    const fileExtension = file.split('.').pop()
                                    return (
                                        <li key={index} className={isActiveClass}>
                                            {
                                                fileExtension != 'mp4'
                                                ? <img src={api.defaults.baseURL + file}/>
                                                :
                                                <video controls controlsList="nodownload">
                                                    <source src={api.defaults.baseURL + file} type="video/mp4"/>
                                                </video>
                                            }
                                        </li> 
                                    )
                                })} 
                                <div className='galleryFullIcon' onClick={e => setGalleryFullscreen(!galleryFullscreen)}>
                                    <FontAwesomeIcon icon={faExpand} size='lg'/>
                                </div>
                                <div className='galleryMenu'>
                                    <a onClick={e => changeActiveFile(false)}>
                                        <FontAwesomeIcon icon={faArrowLeft} size='2x'/>
                                    </a>
                                    <a onClick={e => changeActiveFile(true)}>
                                        <FontAwesomeIcon icon={faArrowRight} size='2x'/>
                                    </a>
                                </div>
                            </ul>
                            <div className='jobDesc'>
                                <h1>Job details</h1>
                                <h3>Customer:</h3>
                                <p>{details.customer}</p>
                                <h3>Project:</h3>
                                <p>{details.project}</p>
                                <h3>Description:</h3>
                                <p>{details.description}</p>
                            </div>
                        </>
                    ) :
                    ( 
                        <h1>Loading...</h1>
                    )
                }
            </div>
            <Footer/>
        </>
    )
}