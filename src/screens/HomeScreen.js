import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Project from '../components/Project'
import projects from '../projects'

function HomeScreen() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Row>
        {projects.map(project => (
            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                <Project project={project}/>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
