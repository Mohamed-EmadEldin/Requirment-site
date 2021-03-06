import {Card} from "primereact/card";
import {NavLink} from "react-router-dom";
import {Image} from "primereact/image";

import '../style.css'

const JobCard = ({job}) => {
    const header = (
        <NavLink to={`/jobs/${job.id}`} className={'btn'}>
            <Image src={`${job.image}`} imageClassName={'rounded img-fluid'} name={`${job.image} image`}
                   width={'250'} alt={`${job.name}`} preview></Image>
        </NavLink>
    )

    return (
        <Card title={job.name} subTitle={`created by - ${job.created_by.user.username}`} style={{ width: '25em' }}
              className={'text-center'} header={header}>
        </Card>
    )
}

export default JobCard;