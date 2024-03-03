import {Component} from 'react'
class Parent extends Component{
    constructor(props)
    {
        super(props);
        this.state = {show: true}
    }
    delComponent =()=>{
        this.setState({show: false})
    }
    render()
    {
        let myComponent;
        if(this.state.show)
        {
            myComponent=<Child /> ;
        }
        return(
            <div>
                <h1>This is Parent Component!</h1>
                {myComponent}
                <button type="button" onClick={this.delComponent} >Delete Component</button>
            </div>
        )
    }
}

class Child extends Component{

    componentWillUnmount()
    {
        alert("Child Component unmounting")
    }
    render()
    {
        return(
            <h1>This is Child Component!</h1>
        )
    }
}

export default Parent;