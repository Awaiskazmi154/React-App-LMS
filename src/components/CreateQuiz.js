import React,{Component} from "react";
const API = 'http://localhost:4000/teacher/createquiz';


class CreateQuiz extends Component {

  constructor(props) {
    super(props);
    this.createquiz = this.createquiz.bind(this);
    this.state = {
      quizno:0,
      question : '',
      answers : [],
      correctAnswer :'b'
    };
  }

  createquiz(e) {
    e.preventDefault();
    let quizno=this.refs.quizno.value;
    let question=this.refs.question.value;
    let ans1=this.refs.ans1.value;
    let ans2=this.refs.ans2.value;
    let ans3=this.refs.ans3.value;
    let ans4=this.refs.ans4.value;
    let correctAnswer=this.refs.correctAnswer.value;
    let answers = [ans1,ans2,ans3,ans4];
    
  let data={
    quizno,question,answers,correctAnswer
  };
  fetch(API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }}).then(function(response) {
      if (response.ok) {
        alert('Quiz Created Successfully')    
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
      
    })
  
  }

render() {
  return (
    <div className="container">
    <div className="row row-content">
        <div className="col-12">
           <h3>Create a new question for the quiz</h3>
        </div>
         <div className="col-12 col-md-9">
                 
         <form>
                <div className="form-group row">
                    <label for="emailid" className="col-md-2 col-form-label">Quiz No :</label>
                    <div className="col-md-3">
                        <input type="email" ref = "quizno" className="form-control" id="emailid" name="emailid" placeholder="e.g. 1"/>
                    </div>
                </div>

                 <br/>
                 <div className="form-group row">
                     <label for="feedback" className="col-md-2 col-form-label">Question</label>
                     <div className="col-md-10">
                         <textarea className="form-control" ref = "question" id="feedback" name="feedback" rows="12" placeholder="Enter the question description here"></textarea>
                     </div>
                 </div>


                 <br/>
                 <div className="form-group row">
                    <label for="emailid" className="col-md-2 col-form-label">Choice a :</label>
                    <div className="col-md-10">
                        <input type="email" ref = "ans1" className="form-control" id="emailid" name="emailid" placeholder="Enter the answer choice description here"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                   <label for="emailid" className="col-md-2 col-form-label">Choice b :</label>
                   <div className="col-md-10">
                       <input type="email" ref = "ans2" className="form-control" id="emailid" name="emailid" placeholder="Enter the answer choice description here"/>
                   </div>
               </div>
               <br/>
               <div className="form-group row">
                   <label for="emailid" className="col-md-2 col-form-label">Choice c :</label>
                   <div className="col-md-10">
                       <input type="email" ref = "ans3" className="form-control" id="emailid"  placeholder="Enter the answer choice description here"/>
                   </div>
               </div>
               <br/>
               <div className="form-group row">
                   <label for="emailid" className="col-md-2 col-form-label">Choice d :</label>
                   <div className="col-md-10">
                       <input type="email" ref = "ans4" className="form-control" id="emailid" placeholder="Enter the answer choice description here"/>
                   </div>
               </div>

               <br/>
                 <div className="form-group row">
                    <div className="col-md-6 offset-md-2">
                           <label className="label" for="approve">
                                <strong>Correct Answer</strong>
                            </label>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <select className="form-control" ref="correctAnswer">
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                        </select>
                    </div>
                </div>
                 <div className="form-group row">
                     <div className="offset-md-2 col-md-10">
                         <button  onClick={this.createquiz} type="submit" className="btn btn-primary">Create Question</button>
                     </div>
                 </div>
                 </form>
         </div>
    </div>
    </div>
    );
  }
}

export default CreateQuiz;