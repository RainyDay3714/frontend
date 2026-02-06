import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import projects from "../projects";
import React from "react";

function DetailScreen() {
    const { id } = useParams()
    const project = projects.find((p) => p._id === id)
    return(
        <div>
            <Link to="/" className="btn btn-light my-3">
            Go Back
            </Link>

            <Row>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <h3>{project.project_name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>{project.project_description}</ListGroupItem>
                    <ListGroupItem>
                        Started at {project.start_date} to {project.end_date}
                    </ListGroupItem>
                    <ListGroupItem>
                        This project is... {project.status}, and it took {project.hours_consumed} hours
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={9}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <h3>{project.task_name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>{project.task_description}</ListGroupItem>
                    <ListGroupItem>
                        Date: s{project.task_start_date} from {project.task_end_date}
                    </ListGroupItem>
                    <ListGroupItem>
                        Current Status: {project.task_status}
                    </ListGroupItem>
                    <ListGroupItem>
                        Hours: {project.task_hours_consumed}
                    </ListGroupItem>
                    <ListGroupItem>
                        User assigned: {project.user_assigned}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            </Row>
        </div>
    )
}

export default DetailScreen