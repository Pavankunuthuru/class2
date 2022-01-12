
import React,{Component} from "react";

class Comp2 extends Component{
    state={
        a: 0,
        title: 'welcome to react',
        isView:true

    }

    addTen(){
        this.setState({
            a: this.state.a +10
          
        });
    }
    addHun(){
        this.setState({
            a: this.state.a +100
        })
    }
    addTou(){
        this.setState({
            a: this.state.a + 1000
        })
    }
    pavan(){
        this.setState({
            title:'hi pavan how are u'
        })
    }
    toggleView(){
        this.setState({
            isView: !this.state.isView
        })
    }

    render(){
        return(
            <div>
                <h1>modifiying state </h1>
                <h1>state={this.state.a}</h1>
                <button onClick={()=>this.addTen()}>Add+10</button>
                <button onClick={()=>this.addHun()}>Add+100</button>
                <button onClick={()=>this.addTou()}>Add+1000</button>
                
                <hr />
                <h3>{this.state.title}</h3>
                <button onClick={()=>this.pavan()}>change</button>
                
                <hr />
                <h3>{this.state.isView}</h3>
              
                <div>
                    {
                        this.state.isView ? (
                            <div>
                                <h1>Login here</h1>
                              <form>
                                  <label>user</label>
                                  <input type="text" name="user" id="user" required />
                                  <br /><br />
                                  <label>password</label>
                                  <input type="password" name="pass" id="pass" required />
                                  <br /><br />
                                  <input type="submit" value="Login" />
                              </form>
                            </div>
                        ):(
                            <div>
                            <h1>Register</h1>
                          <form>
                              <label>user</label>
                              <input type="text" name="user" id="user" required />
                              <br /><br />
                              <label>password</label>
                              <input type="password" name="pass" id="pass" required />
                              <br /><br />
                              <input type="submit" value="Register" />
                          </form>
                        </div>
                        )
                    }
                </div>
                <button onClick={()=>this.toggleView()}>change form</button>
            </div>
        )
    }
}
export default Comp2;