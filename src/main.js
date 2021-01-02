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
                    Welcome <span style={{color:"#C21E56", fontWeight:'bold'}}>{this.state.guestName}</span>, please proceed to 
                    
                </p>

                <h1> Table No {this.state.guestTableNo} </h1>

                <img src={"https://raw.githubusercontent.com/nirvanasm/Wedding-Guest-Book/master/denah"+this.state.guestTableNo+".jpeg"} width="300px"/>
            </div>
        );
    }
  }
}

export default Child;

const guestList = [
    {Name: "Shannon", seatNo:1, tableNo:1},
    {Name: "Karina", seatNo:2, tableNo:1},
    {Name: "Diandra", seatNo:3, tableNo:1},
    {Name: "Vanessa", seatNo:4, tableNo:1},
    {Name: "Livia", seatNo:1, tableNo:2},
    {Name: "Hans", seatNo:2, tableNo:2},
    {Name: "Ellen", seatNo:3, tableNo:2},
    {Name: "Anastasia", seatNo:4, tableNo:2},
    {Name: "Felix", seatNo:5, tableNo:2},
    {Name: "Giscielle", seatNo:6, tableNo:2},
    {Name: "Sheena", seatNo:1, tableNo:3},
    {Name: "Fang Fang", seatNo:2, tableNo:3},
    {Name: "Fei Fei", seatNo:3, tableNo:3},
    {Name: "Anthony", seatNo:4, tableNo:3},
    {Name: "Christina", seatNo:5, tableNo:3},
    {Name: "Sharon", seatNo:6, tableNo:3},
    {Name: "Ita", seatNo:1, tableNo:4},
    {Name: "Hendrik", seatNo:1, tableNo:4},
    {Name: "Angle", seatNo:2, tableNo:4},
    {Name: "Irvandy", seatNo:3, tableNo:4},
    {Name: "Jenny", seatNo:4, tableNo:4},
    {Name: "Johan", seatNo:5, tableNo:4},
    {Name: "Jonas Aditya Sunandar", seatNo:1, tableNo:5},
    {Name: "Jennifer Theresia", seatNo:2, tableNo:5},
    {Name: "Fadil Kamal", seatNo:3, tableNo:5},
    {Name: "Della", seatNo:4, tableNo:5},
    {Name: "Jonathan Altheo", seatNo:5, tableNo:5},
    {Name: "Andrianson Nathanael", seatNo:6, tableNo:5},
    {Name: "Pinandita Anggakara Singal", seatNo:1, tableNo:6},
    {Name: "Simplicity F C", seatNo:2, tableNo:6},
    {Name: "Andhika Alfonsus", seatNo:3, tableNo:6},
    {Name: "Arie", seatNo:4, tableNo:6},
    {Name: "Pacar Arie", seatNo:5, tableNo:6},
    {Name: "Luna Fidelita", seatNo:1, tableNo:7},
    {Name: "Meichen Dewi", seatNo:2, tableNo:7},
    {Name: "Steffany Haryadi", seatNo:3, tableNo:7},
    {Name: "Kevin Herklots", seatNo:4, tableNo:7},
    {Name: "Vincent Pangestu", seatNo:5, tableNo:7},
    {Name: "Yenny Yorisca", seatNo:1, tableNo:8},
    {Name: "Shierlen Octavia", seatNo:2, tableNo:8},
    {Name: "Refin", seatNo:3, tableNo:8},
    {Name: "Mariska", seatNo:4, tableNo:8},
    {Name: "Vanesha Natalia Ignacia", seatNo:5, tableNo:8},
    {Name: "Stella Natalia Ignacia", seatNo:6, tableNo:8},
  ];