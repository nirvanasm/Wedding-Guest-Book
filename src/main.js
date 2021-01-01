/* Child.jsx */
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import Denah from 'https://nirvanasm.github.io/Wedding-Guest-Book/src/denah.jpeg'

class Child extends React.Component {
  HandleSubmit(e){
    e.preventDefault();
    this.setState({submitted:true})
  }
  
  constructor(props) {
    super(props);
    this.state = {
        guestName: null,
        guestSeatNo: 0,
        submitted: false,
    };
    this.setTextInputRef = element => {
        this.textInput = element;
    };
  }
  render() {
    if(!this.state.submitted){
        return (
            <div className="App-header">
                <p>
                    Hi there! Search your name and find your table number!
                </p>
                <Autocomplete
                    id="combo-box-demo"
                    ref={this.setTextInputRef}
                    options={guestList}
                    getOptionLabel={(guest) => guest.Name}
                    style={{ width: 300, backgroundColor: 'white', outlineColor: 'primary', }}
                    renderInput={(params) => <TextField {...params} variant="outlined" color="primary"/>}
                    onChange={(event, val) => this.setState({ guestName: val.Name, guestSeatNo: val.seatNo, })}
                />
                <br></br>
                <Button variant="contained" size="large" onClick={this.HandleSubmit.bind(this)} display="inline">Submit</Button>
                
            </div>
        );
    }else{
        return (
            <div>
                <p>
                    Welcome <span style={{color:"#C21E56", fontWeight:'bold'}}>{this.state.guestName}</span>, please proceed to red table. Your seat number is
                </p>

                <h1> {this.state.guestSeatNo} </h1>

                <img src={Denah} width="500px"/>
            </div>
        );
    }
  }
}

export default Child;

const guestList = [
    {Name: "Shannon", seatNo:0},
    {Name: "Karina", seatNo:0},
    {Name: "Diandra", seatNo:0},
    {Name: "Vanessa", seatNo:0},
    {Name: "Livia", seatNo:0},
    {Name: "Hans", seatNo:0},
    {Name: "Ellen", seatNo:0},
    {Name: "Anastasia", seatNo:0},
    {Name: "Felix", seatNo:0},
    {Name: "Giscielle", seatNo:0},
    {Name: "Sheena", seatNo:0},
    {Name: "Fang", seatNo:0},
    {Name: "Feifei", seatNo:0},
    {Name: "Anthony", seatNo:0},
    {Name: "Christina", seatNo:0},
    {Name: "Sharon", seatNo:0},
    {Name: "Ita", seatNo:0},
    {Name: "Hendrik", seatNo:0},
    {Name: "Angle", seatNo:0},
    {Name: "Irvandy", seatNo:0},
    {Name: "jenny", seatNo:0},
    {Name: "johan", seatNo:0},
    {Name: "Jonas Aditya Sunandar", seatNo:0},
    {Name: "Jennifer Theresia", seatNo:0},
    {Name: "Fadil Kamal", seatNo:0},
    {Name: "Della", seatNo:0},
    {Name: "Jonathan Altheo", seatNo:0},
    {Name: "Andrianson Nathanael", seatNo:0},
    {Name: "Pinandita Anggakara Singal", seatNo:0},
    {Name: "Simplicity F C", seatNo:0},
    {Name: "Andhika Alfonsus", seatNo:0},
    {Name: "Arie", seatNo:0},
    {Name: "Pacar Arie", seatNo:0},
    {Name: "Luna Fidelita", seatNo:0},
    {Name: "Meichen Dewi", seatNo:0},
    {Name: "Steffany Haryadi", seatNo:0},
    {Name: "Kevin Herklots", seatNo:0},
    {Name: "Vincent Pangestu", seatNo:0},
    {Name: "Yenny Yorisca", seatNo:0},
    {Name: "Shierlen Octavia", seatNo:0},
    {Name: "Refin", seatNo:0},
    {Name: "Mariska", seatNo:0},
    {Name: "Vanesha Natalia Ignacia", seatNo:0},
    {Name: "Stella Natalia Ignacia", seatNo:0},
  ];