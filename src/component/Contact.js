/* react class component by using constructor*/
import React,{Component} from "react";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            a:20,
            b:30,
            isAdmin:true,
            emp:['pavan','swetha','anki'],
            msg:'welcome to state'
        };
    }
       render() {
           return(
               <div>
                   <h3>Contact</h3>
                   <h4>a={this.state.a}</h4>
                   <h4>b={this.state.b}</h4>
                   <h4>isAdmin={this.state.isAdmin ? 'true':'false'}</h4>
                   <h4>msg={this.state.msg}</h4>
                   
               </div>
           )
       }
}
export default Contact;