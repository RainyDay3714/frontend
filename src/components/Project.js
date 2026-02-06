import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import React from 'react';

function Project({project}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/project/${project._id}`}>

      </a>

      <CardBody>
        <a href={`/project/${project._id}`}>
          <CardTitle as = "div">
            <strong>{project.project_name}</strong>
          </CardTitle>
        </a>

        <CardText as = "h7">
          {project.project_description}
        </CardText>

        {/* <CardText as = "div">
          <div className='my-3'>
            Started at {project.start_date} to {project.end_date}
          </div>
        </CardText>

        <CardText as = "div">
          <div className='my-3'>
            This project is... {project.status}, and it took {project.hours_consumed}hrs
          </div>
        </CardText> */}

      </CardBody>
    </Card>
  )
}

export default Project
