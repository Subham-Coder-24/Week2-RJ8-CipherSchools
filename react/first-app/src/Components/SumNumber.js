import React,{Component} from "react";
import { testApi } from "../apis/testApi";
class SumNumbers extends Component {
    state={
        firstNumber:0,
        secondNumber:0,
        sum:0,
        sumString:"the component has not render "
    };
    
    componentDidMount(){
        console.log("comp did mount");
        testApi(5,6).then((sum)=>{
            this.setSum(sum);
        })
    }
    // componentDidUpdate(){
    //     console.log("update");
    //     this.setState({...this.state,sumString:`the sum is :${this.state.set}`})
    // }
    setSum = (sum)=>{
        if(typeof sum !== "undefined"){
            this.setState({...this.state,sum:this.state.firstNumber+this.state.secondNumber});
        }
        else{
            this.setState({...this.state,sum})
        }
        
    }
    
    render(){
        return (
            <div>
                <input type="number"
                placeholder="Enter first Number" 
                onChange={(e)=>{
                    this.setState({
                        ...this.state,
                        firstNumber:parseInt(e.target.value),
                    });
                }}
                value={this.state.firstNumber}
                />
                <input type="number"
                placeholder="Enter second Number" 
                onChange={(e)=>{
                    this.setState({
                        ...this.state,
                        secondNumber:parseInt(e.target.value),
                    });
                }}
                value={this.state.secondNumber}
                />
                <button onClick={(e)=>this.setSum()}>Add Numbers</button>
                <h3>The sum is: {this.state.sum}</h3>
                
            </div>
        )
    }
}
export default SumNumbers;