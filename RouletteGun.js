import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps ={
        bulletInChamber: 8,
    };

    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    handleTrigger = () => {
        this.setState({
            spinningTheChamber: true
        })
    this.timeout =
            setTimeout( () => {
                this.setState({
                    chamber: Math.ceil(Math.random()*8),
                    spinningTheChamber: false,
                })}, 2000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    handleDisplay(props){
        if (this.state.spinningTheChamber === true){
            return 'spinning the chamber...pulling the trigger..'
        }
        else if (this.state.chamber === this.props.bulletInChamber){
            return 'BANG!'
        }
        else{
            return 'SAFE'
        }
    }

    render(){
        return <div>
            <p>{this.handleDisplay()}</p>
            <button onClick={this.handleTrigger}>Pull the Trigger</button>
        </div>
    }
    
}

export default RouletteGun;