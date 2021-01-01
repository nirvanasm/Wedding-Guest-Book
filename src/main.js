/* Child.jsx */
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import Denah from './denah.jpeg'

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
        guestTableNo: 0,
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
                    onChange={(event, val) => this.setState({ guestName: val.Name, guestSeatNo: val.seatNo, guestTableNo: val.tableNo})}
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

                <img src={"https://raw.githubusercontent.com/nirvanasm/Wedding-Guest-Book/master/denah"+this.state.guestTableNo+".jpeg"} width="500px"/>
            </div>
        );
    }
  }
}

export default Child;

const guestList = [
    {Name: "Shannon", seatNo:0, tableNo:1},
    {Name: "Karina", seatNo:0, tableNo:1},
    {Name: "Diandra", seatNo:0, tableNo:1},
    {Name: "Vanessa", seatNo:0, tableNo:1},
    {Name: "Livia", seatNo:0, tableNo:2},
    {Name: "Hans", seatNo:0, tableNo:2},
    {Name: "Ellen", seatNo:0, tableNo:2},
    {Name: "Anastasia", seatNo:0, tableNo:2},
    {Name: "Felix", seatNo:0, tableNo:2},
    {Name: "Giscielle", seatNo:0, tableNo:2},
    {Name: "Sheena", seatNo:0, tableNo:3},
    {Name: "Fang", seatNo:0, tableNo:3},
    {Name: "Feifei", seatNo:0, tableNo:3},
    {Name: "Anthony", seatNo:0, tableNo:3},
    {Name: "Christina", seatNo:0, tableNo:3},
    {Name: "Sharon", seatNo:0, tableNo:3},
    {Name: "Ita", seatNo:0, tableNo:4},
    {Name: "Hendrik", seatNo:0, tableNo:4},
    {Name: "Angle", seatNo:0, tableNo:4},
    {Name: "Irvandy", seatNo:0, tableNo:4},
    {Name: "jenny", seatNo:0, tableNo:4},
    {Name: "johan", seatNo:0, tableNo:4},
    {Name: "Jonas Aditya Sunandar", seatNo:0, tableNo:5},
    {Name: "Jennifer Theresia", seatNo:0, tableNo:5},
    {Name: "Fadil Kamal", seatNo:0, tableNo:5},
    {Name: "Della", seatNo:0, tableNo:5},
    {Name: "Jonathan Altheo", seatNo:0, tableNo:5},
    {Name: "Andrianson Nathanael", seatNo:0, tableNo:5},
    {Name: "Pinandita Anggakara Singal", seatNo:0, tableNo:6},
    {Name: "Simplicity F C", seatNo:0, tableNo:6},
    {Name: "Andhika Alfonsus", seatNo:0, tableNo:6},
    {Name: "Arie", seatNo:0, tableNo:6},
    {Name: "Pacar Arie", seatNo:0, tableNo:6},
    {Name: "Luna Fidelita", seatNo:0, tableNo:7},
    {Name: "Meichen Dewi", seatNo:0, tableNo:7},
    {Name: "Steffany Haryadi", seatNo:0, tableNo:7},
    {Name: "Kevin Herklots", seatNo:0, tableNo:7},
    {Name: "Vincent Pangestu", seatNo:0, tableNo:7},
    {Name: "Yenny Yorisca", seatNo:0, tableNo:8},
    {Name: "Shierlen Octavia", seatNo:0, tableNo:8},
    {Name: "Refin", seatNo:0, tableNo:8},
    {Name: "Mariska", seatNo:0, tableNo:8},
    {Name: "Vanesha Natalia Ignacia", seatNo:0, tableNo:8},
    {Name: "Stella Natalia Ignacia", seatNo:0, tableNo:8},
  ];