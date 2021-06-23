import React,{Component} from "react";

const API1 = 'http://localhost:4000/student/';
const API = 'http://localhost:4000/student/viewquiz/';

class ViewQuiz extends Component {

    constructor(props) {
        super(props);
       this.state = {
        quiz:{
            quizno:0,
            questions:[
                {question:'question1', answers:['choice1','choice2','choice3','choice4'],correctAnswer:'a'},
                {question:'question2', answers:['choice1','choice2','choice3','choice4'],correctAnswer:'b'}
                 ]
        },
        students:[]
      };
      this.viewquiz.bind(this);
    }
      viewquiz=(e)=> {
        e.preventDefault();
        let student_id=this.refs.studentlist.value;
        fetch(API+student_id)
   .then(response => response.json())
   .then(data => this.setState({ quiz: data.quiz }));
        }

      componentDidMount() {

          fetch(API1)
          .then(response => response.json())
          .then(data => this.setState({ students: data }));
      }
    

render() {



    const { students } = this.state;

  return (
    <div className="container">
    <div className="row row-content">
        <div className="col-12">
           <h3>Assigned Quiz Questions</h3>
        </div>
         <div className="col-12 col-md-9">
             <form>
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
                         <button type="submit" onClick={this.viewquiz} className="btn btn-primary" >View Quiz</button>
                     </div>
                 </div>

                <div className="form-group row">
                    <label for="emailid" className="col-md-2 col-form-label">Quiz No : {this.state.quiz.quizno}</label>
                </div>

                {this.state.quiz.questions.map(question =>
                <div>
                 <div className="form-group row">
                     <label for="feedback" className="col-md-2 col-form-label"><strong>Question</strong></label>
                     <label for="feedback" className="col-md-2 col-form-label">{question.question}</label>
                     <br/>
                 </div>


                 <div className="form-group row">
                    <label for="feedback" className="col-md-2 col-form-label">Choice a</label>
                    <label for="feedback" className="col-md-2 col-form-label">{question.answers[0]}</label>
                    <br/>
                </div>

                <div className="form-group row">
                    <label for="feedback" className="col-md-2 col-form-label">Choice b</label>
                    <label for="feedback" className="col-md-2 col-form-label">{question.answers[1]}</label>
                    <br/>
                </div>
                <div className="form-group row">
                    <label for="feedback" className="col-md-2 col-form-label">Choice c</label>
                    <label for="feedback" className="col-md-2 col-form-label">{question.answers[2]}</label>
                    <br/>
                </div>
                <div className="form-group row">
                    <label for="feedback" className="col-md-2 col-form-label">Choice d</label>
                    <label for="feedback" className="col-md-2 col-form-label">{question.answers[3]}</label>
                    <br/>
                </div>
                <hr/>
                </div>
                )}
             </form>
    
         </div>
          <div className="col-12 col-md">
         </div>
    </div>
    </div>


    );
  }
}

export default ViewQuiz;