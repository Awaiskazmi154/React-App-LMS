import React,{Component} from "react";

const API = 'http://localhost:4000/student/';


class ViewResult extends Component {

  constructor(props) {
    super(props);
   this.state = {
    marks: null,
    students:[]
  };
  this.viewmarks.bind(this);
}


  viewmarks=(e)=> {
    e.preventDefault();
    let student_id=this.refs.studentlist.value;
    fetch(API+student_id)
.then(response => response.json())
.then(data => this.setState({ marks: data.result.marks }));
    }

componentDidMount() {

    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ students: data }));
}


render() {

  const { students } = this.state;

  return (
    <div className="container">
    <div className="row row-content">
        <div className="col-12">
           <h3>Attempted Quiz Marks</h3>
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
                         <button type="submit" onClick={this.viewmarks} className="btn btn-primary" >View Quiz Marks</button>
                     </div>
                 </div>
                <div className="form-group row">
                    <label for="emailid" className="col-md-2 col-form-label">Quiz : {this.state.students.quiz}</label>
                </div> 

                <div className="form-group row">
                    <label for="emailid" className="col-md-2 col-form-label">Marks : {this.state.marks}</label>
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

export default ViewResult;