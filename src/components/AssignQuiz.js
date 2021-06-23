import React,{Component} from "react";
const API = 'http://localhost:4000/quizes/';
const API1 = 'http://localhost:4000/student/';
const API2 = 'http://localhost:4000/teacher/assignquiz/';

class AssignQuiz extends Component {

    constructor(props) {
        super(props);
       this.state = {
        quizes: [],
        students:[]
      };
      this.assignquiz.bind(this);
    }

    assignquiz=(e)=> {
        e.preventDefault();
        let student_id=this.refs.studentlist.value;
        let quizno=this.refs.quizlist.value;

       fetch(API2+student_id+'/'+quizno, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }}).then(function(response) {
          if (response.ok) {
            alert('Quiz Assigned Successfully')
            return true;
                } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
              })
        }
      componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ quizes: data }));

          fetch(API1)
          .then(response => response.json())
          .then(data => this.setState({ students: data }));
      }

render() {


    const { quizes } = this.state;
    const { students } = this.state;

  return (
    <div className="container">
    <div className="row row-content">
        <div className="col-12">
           <h3>Select the Quiz No. and Student roll no. to assign the quiz</h3>
        </div>
         <div className="col-12 col-md-9">
             <form>
                 <div className="form-group row">
                     <label for="sname" className="col-md-2 col-form-label">Select Quiz No. </label>
                     <div className="col-md-10">
                         <select ref="quizlist" align="center" className="form-control">
                                {quizes.map(quiz =>
                        <option key={quiz.quizno} value={quiz.quizno}>
                            {quiz.quizno}</option>
                        )}
                </select>
                     </div>
                 </div>

                 <div className="form-group row">
                    <label for="sname" className="col-md-2 col-form-label">Select Student Roll No. </label>
                    <div className="col-md-10">
                    <select ref="studentlist" align="center" className="form-control">
                                {students.map(student =>
                        <option key={student.rollno} value={student._id}>
                            {student.rollno}</option>
                        )}
                </select>
                </div>
                </div>

                 <div className="form-group row">
                     <div className="offset-md-2 col-md-10">
                         <button type="submit" onClick={this.assignquiz} className="btn btn-primary" >Assign Quiz</button>
                     </div>
                 </div>
             </form>
    
         </div>
          <div className="col-12 col-md">
         </div>
    </div>
    </div>

    );
  }
}

export default AssignQuiz;