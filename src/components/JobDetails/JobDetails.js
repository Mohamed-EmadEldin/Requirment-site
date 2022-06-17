import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Image} from "primereact/image";
import {Button} from "primereact/button";

import './JobDetails.css'
import {useSelector} from "react-redux";

let JobDetails = () => {

    let [job, setJob] = useState([])
    let {id} = useParams()

    useEffect(() => {
        let url = process.env.REACT_APP_JOB_DETAILS_URL + id
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setJob(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    let error = (err) => {
        return (<div className={'alert alert-error'}>
            <p className={'h3'}>{`oOps, ${err} happened, try again later`}</p>
        </div>)
    }
    const state = useSelector(state => state)
    const backButton = (
            <NavLink to={'/jobs'} className={'btn'}>
                <Button className={'p-button p-button-outlined p-button-rounded'}
                        label={'Back'}></Button>
            </NavLink>
    )

    const applyButton = (
            <NavLink to={'...'} className={'btn'}>
                <Button className={'p-button p-button-outlined p-button-rounded'}
                        label={'Apply'}></Button>
            </NavLink>
    )

    let renderJob = () => {
        if (job.id) {
            return (
                <div className={'details my-5 py-5 vh-10 row'}>
                    <div className={'d-flex align-items-center justify-content-center text-center row col-lg-11 col-sm-12'}>
                        <div className={'d-flex-column col-sm-12 col-lg-6 col-md-6 order-1 order-lg-0 order-md-0'}>
                            <p className={'h3'}>
                                {job.name}
                            </p>
                            <p>
                                {job.Description}
                            </p>
                        </div>
                        <div className={'col-sm-12 col-lg-6 col-md-6 order-0 order-lg-1 order-md-1'}>
                            <Image preview className={'rounded img-fluid'} name={`${job.name} image`} width={'200'}
                                   alt={`${job.name}`} src={job.image}></Image>
                        </div>
                    </div>
                    <div className={'d-flex flex-column col-lg-1 justify-content-center'}>
                        {

                          state.user_type=== 'DEVELOPER'?  applyButton : null
                        }
                        {backButton}
                    </div>
                </div>
            )
        } else {
            error('no data')
        }
    }

    return(renderJob())
}

export default JobDetails