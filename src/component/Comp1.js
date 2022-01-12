/* react class component without using constructor */
import React, { Component } from "react";

class Comp1 extends Component{
    state={
        a:40,
        b:20,
        str:'welcome to state string',
        tech:['html','css','javascript'],
        emp:[{
            id:1,
            name:'pavan',
            email:"pavan@gmail.com"
        },
        {id:2,
        name:'swetha',
        email:"pavan@gmail.com"}
       ]
    }
    render(){
        return(
         <div>
                <h1>state without constructor</h1>
                <h3>sum={this.state.a+this.state.b}</h3>
                <h3>product={this.state.a*this.state.b}</h3>
                <h3>{this.state.str}</h3>
                <h3>{this.state.tech.join('-')}</h3>
            
            <div>
               { this.state.tech.map((item,key)=>{
                return(
                    <h3 key={key}>key={key}item={item}</h3>
                )
    })}
            </div>
              <div>
                  {this.state.emp.map((item,key)=>{
                      return(
                          <div key={key}>
                          <h3>key={key} item={item.id}</h3>
                          <h3>key={key} item={item.name}</h3>
                          <h3>key={key} item={item.email}</h3>
                          </div>
                      )
                  })
                  }
              </div>
        </div>
        )
    }
}
export default Comp1;