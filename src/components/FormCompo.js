import React, { Component } from "react";

class FormCompo extends Component{
state={
    Name:'',
    Department:'',
    Rating: '',
    EmpData:[]

}

InputHandler=(e)=>{

this.setState({[e.target.name]:[e.target.value]})

}

SubmitHandler=(event)=>{
    event.preventDefault();
 const newObj={
    Name: this.state.Name,
    Department:this.state.Department,
    Rating:this.state.Rating
 }
 this.state.EmpData.push(newObj)
 this.setState({EmpData:this.state.EmpData})

}

    render(){
        return(
            <div>
                <form>
                <label htmlFor="name">Name : </label>
                <input id="name" type="text" name="Name" value={this.state.Name} onChange={this.InputHandler} placeholder="ENTER NAME" required/><br></br>
                <label htmlFor="Dept">Department : </label>
                <input id="Dept" type="text" name="Department" value={this.state.Department} onChange={this.InputHandler} placeholder="ENTER DEPARTMENT" required/><br></br>
                <label htmlFor="Ratinng">Rating : </label>
                <input id="Rating" type="number" name="Rating" value={this.state.Rating} onChange={this.InputHandler} required/><br></br>

                <button className="btn" onClick={this.SubmitHandler}>Submit</button>
                </form>
                <div className="Data" >
                {this.state.EmpData.map((item,index)=>{
                    return(
                        <div key={index}>
                        <span ><div className="box" >Name : {item.Name} | Department : {item.Department} | Rating : {item.Rating}</div></span>
                       </div>
                            )
                    
                        
                    

                    })}
                </div>
                

            </div>
        )
    }
}

export default FormCompo;