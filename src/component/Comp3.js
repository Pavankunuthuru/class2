import React,{Component} from "react";
 
const url ="https://jsonplaceholder.typicode.com";

class Comp3 extends Component{
    state={
        posts:[]
    }
    /* life cycle hook method */
    componentDidMount(){
        fetch(`${url}/posts`)
        .then(res=>res.json())
        .then(data=>{
            console.log('data=',data);
            this.setState({
                posts:data
            })
        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                <h1>API data</h1>
            </div>
        )
    }
}
export default Comp3;