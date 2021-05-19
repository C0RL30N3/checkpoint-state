
import './App.css';
import React ,{Component} from 'react';

class App extends Component {
  state = {
    Person: {
      fullName: "Mehdi Khediri",
      bio: "Hi! Im FullStack JS,based on Gafsa.I had my Certification from GomyCode.I have found enjoyment and creativity during my period of Learning Developement.",
      imgSrc: 'Mehdi.jpg',
      profession: "Web Developer"
    
    },
    show: false,
    timer: 0,
    intervall:null
  };
  handleShowPerson = () => {
    this.setState({
      
      show: !this.state.show
    });
  };
  componentDidMount(){

    this.setState({
      intervall : setInterval(() => {
        this.setState({timer: this.state.timer + 1 }) ;

      }, 1000) ,
    });

  }
  componentDidUpdate(){
    console.log("componentDidUpdate()") ;

  }
  componentWillUnmount(){

    clearInterval(this.state.timer);

  }
  render(){
  return (
    <div className="App">
    <img src='profile.svg' className="App-logo" alt="logo" /><br></br>
    <br/>
    <h3>تحبي تشوف بروفيلي و لا ؟</h3>
    <br/>
    <br/>

        {this.state.show && (<div className="showprofile">
  <h1>{this.state.Person.fullName}</h1>
 
  <p>{this.state.Person.bio}</p>
  <img src={this.state.Person.imgSrc} alt='mehdi' width={220} height={210}></img> 
  <h3>{this.state.Person.profession}</h3>
  <h2>Number of seconds{this.state.seconds}</h2>
<h2>{this.state.timer}</h2>
   </div>
)}

<button onClick={this.handleShowPerson}>{this.state.show ? "OFF" : "On"}</button>
  </div>

  );
  }
  }

  export default App;