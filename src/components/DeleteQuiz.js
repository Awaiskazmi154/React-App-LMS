import React,{Component} from "react";
const API = 'http://localhost:4000/quizes/';
const API1 = 'http://localhost:4000/teacher/delquiz/';

class DeleteQuiz extends Component {

    constructor(props) {
        super(props);
       this.state = {
        quizes: [],
      };
      this.delquiz.bind(this);
    }

    delquiz=(e)=> {
        e.preventDefault();
        let quizno=this.refs.list.value;
       fetch(API1+quizno, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }}).then(function(response) {
          if (response.ok) {
            alert('Quiz Deleted Successfully')
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
      }
render() {

    const { quizes } = this.state;

  return (

        <div align="center">
            <h1>Select a Quiz to Delete</h1>
            <div className="col-12 col-md-9">
        <form name="del">

            <div className="col-md-5">
                <select ref="list" align="center" className="form-control">
                                {quizes.map(quiz =>
                        <option key={quiz.quizno} value={quiz.quizno}>
                            {quiz.quizno}</option>
                        )}
                </select>  
                <button type="submit" onClick={this.delquiz} className="btn btn-primary">Delete Quiz</button>
                </div>   
        </form>
        </div>
            </div>

    );
  }
}

export default DeleteQuiz;