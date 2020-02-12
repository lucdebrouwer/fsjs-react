import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.id),
      course: {}
    };
  }

  getCourse(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ course: data });
      });
  }

  componentDidMount() {
    const url = `http://localhost:5000/api/courses/${this.state.id}`;
    this.getCourse(url);
  }

  render() {
    return (
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
            <span>
              <a className="button" href="update-course.html">
                Update Course
              </a>
              <a className="button" href="/">
                Delete Course
              </a>
            </span>
            <a className="button button-secondary" href="/">
              Return to List
            </a>
          </div>
        </div>
        <div class="bounds course--detail">
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">Build a Basic Bookcase</h3>
              <p>By Joe Smith</p>
            </div>
            <div className="course--description">
              <p>My course description</p>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>14 hours</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    <li>some material</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CourseDetail);
