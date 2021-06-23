import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import CreateQuiz from './components/CreateQuiz';
  import AssinQuiz from './components/AssignQuiz';
  import DeleteQuiz from './components/DeleteQuiz';
  import UpdateMarks from './components/UpdateMarks';
  import AttemptQuiz from './components/AttemptQuiz';
  import ViewQuiz from './components/ViewQuiz';
  import ViewResult from './components/ViewResult';

function App() {
  return (
    <div>
              <div className="container"><h1 align="center">
                    Welcome to React LMS</h1>
                </div>  <div className="row">
                    <div className="col-md-12" >
                        <Router >
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                                <Navbar.Brand href="#home" >LMS</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/create-quiz">Create Quiz</Nav.Link>
                                    <Nav.Link href="/assign-quiz">Assign Quiz</Nav.Link>
                                    <Nav.Link href="/delete-quiz">Delete Quiz</Nav.Link>
                                    <Nav.Link href="/update-marks">Update Marks</Nav.Link>
                                    <Nav.Link href="/view-quiz">View Quiz</Nav.Link>    
                                    <Nav.Link href="/attempt-quiz">Attempt Quiz</Nav.Link>                        
                                    <Nav.Link href="/view-result">View Result</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/create-quiz">
                                    <CreateQuiz />
                                </Route>
                                <Route exact path="/assign-quiz">
                                    <AssinQuiz />
                                </Route>
                                <Route exact path="/delete-quiz">
                                    <DeleteQuiz />
                                </Route>
                                <Route exact path="/update-marks">
                                    <UpdateMarks />
                                </Route>
                                <Route exact path="/attempt-quiz">
                                    <AttemptQuiz />
                                </Route>
                                <Route exact path="/view-quiz">
                                    <ViewQuiz />
                                </Route>
                                <Route exact path="/view-result">
                                    <ViewResult />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>

                
            </div>
  );
}

export default App;
