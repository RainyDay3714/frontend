import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import React from 'react';
import { Link } from 'react-router-dom';

function Project({project}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/project/${project._id}`}>

      </Link>

      <CardBody>
        <Link to={`/project/${project._id}`}>
          <CardTitle as = "div">
            <strong>{project.project_name}</strong>
          </CardTitle>
        </Link>

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
