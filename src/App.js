import React from 'react';

class App extends React.Component{

  state={
    historytext:"",
    inputtext:"",
    operator:".",
    interans:0,
    start:true
  }

  clicked=(event)=>{
   // var name=event.target.name;
    this.setState({inputtext:this.state.inputtext+event.target.name});
  }

  eraseone=()=>{
    var txt="";
    for(let i=0;i<this.state.inputtext.length-1;i++){
      txt+=this.state.inputtext[i];
    }
    this.setState({inputtext:txt});
  }

  clear=()=>{
      this.setState({inputtext:"",historytext:""});
      this.setState({start:true,interans:0});
  }

  operator=(event)=>{
    if(this.state.inputtext==="0"&&this.state.operator==="*"){
      this.setState({historytext:"0",interans:0,inputtext:""});
      return;
    }
    if(!Number(this.state.inputtext)){
      this.setState({operator:event.target.name});
      return;
    }
    var op=event.target.name;
    console.log("OP val "+op);
    this.setState({historytext:this.state.inputtext});
    this.setState({inputtext:""});
    if(op==="+"){ console.log("Plus et"); this.setState({operator:"+"});}
    else if(op==="-"){this.setState({operator:"-"});}
    else if(op==="*"){this.setState({operator:"*"});}
    else{this.setState({operator:"/"});}
    if(this.state.start){
        let ans=parseInt(this.state.inputtext);
        //console.log("A "+this.state.inputtext);
        //console.log("L "+this.state.historytext.length);
        this.setState({interans:ans,start:false}); 
        //console.log("ans "+ans+this.state.interans);  
    }
    else{
        var a=parseInt(this.state.inputtext);
        if(op==="+"){
          let ans=this.state.interans+a;
          this.setState({historytext:ans,interans:ans});
        }
        else if(op==="-"){
          let ans=this.state.interans-a;
          this.setState({historytext:ans,interans:ans});
        }
        else if(op==="*"){
          let ans=this.state.interans*a;
          this.setState({historytext:ans,interans:ans});
        }
        else{
          let ans=this.state.interans/a;
          this.setState({historytext:ans,interans:ans});
        }
    }
  }

  calculate=()=>{
    console.log("Calc for "+this.state.operator);
    var a=parseInt(this.state.inputtext);
    var b=parseInt(this.state.historytext);
    if(isNaN(a)){
      console.log("Returning back the control");
      return;
    }
    //console.log("LA "+a.length+" LB "+b.length);
    if(this.state.operator==="+"){ this.setState({historytext:(a+b),interans:(a+b)}); }
    else if(this.state.operator==="-"){ this.setState({historytext:a-b,interans:(a-b)}); }
    else if(this.state.operator==="*"){ this.setState({historytext:a*b,interans:(a*b)}); }
    else{ this.setState({historytext:a/b,interans:(a/b)}); }
    this.setState({inputtext:""});
  }

  render(){
    return (
    <div className="container-fluid bg-dark">
      
      <div className="row">
        <div style={{borderRadius:10}} className="col-lg-2 col-md-2 col-xl-2 col-sm-2 bg-warning">
            <h2>Calci By Rocky</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-2 text-secondary">
            <input type="text" style={{width:'100%',borderWidth:0}} value={this.state.historytext} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-md-2 col-xl-2 col-sm-2 text-white">
            <input type="text" style={{width:'100%',borderWidth:0}} value={this.state.inputtext} />
        </div>    
      </div>
      <div className="row">
        <button name="1" onClick={this.clicked} className="btn btn-primary my-3 ml-3">1</button>
        <button name="2" onClick={this.clicked} className="btn btn-primary ml-3 my-3">2</button> 
        <button name="3" onClick={this.clicked} className="btn btn-primary ml-3 my-3">3</button> 
        <button name="+" onClick={this.operator} className="btn btn-danger ml-3 my-3">+</button> 
      </div>
      <div className="row">
        <button name="4" onClick={this.clicked} className="btn btn-primary my-3 ml-3">4</button>
        <button name="5" onClick={this.clicked} className="btn btn-primary ml-3 my-3">5</button> 
        <button name="6" onClick={this.clicked} className="btn btn-primary ml-3 my-3">6</button> 
        <button name="-" onClick={this.operator} className="btn btn-danger ml-3 my-3">-</button> 
      </div>
      <div className="row">
        <button name="7" onClick={this.clicked} className="btn btn-primary my-3 ml-3">7</button>
        <button name="8" onClick={this.clicked} className="btn btn-primary ml-3 my-3">8</button> 
        <button name="9" onClick={this.clicked} className="btn btn-primary ml-3 my-3">9</button> 
        <button name="*" onClick={this.operator} className="btn btn-danger ml-3 my-3">*</button> 
      </div>
      <div className="row">
        <button name="0" onClick={this.clicked} className="btn btn-primary my-3 ml-3">0</button>
        <button onClick={this.calculate} style={{width:85}} className="btn btn-warning my-3 ml-3">   =  </button>
        <button name="/" onClick={this.operator} className="btn btn-danger my-3 ml-3">/</button>
      </div>
      <div className="row">
        <button name="" onClick={this.clear} className="btn btn-primary my-3 ml-3">C</button>
        <button name="" onClick={this.eraseone} style={{width:130}} className="btn btn-primary ml-3 my-3">Backspace</button> 
      </div>
    </div>);
    
  }

}

export default App;