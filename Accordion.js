import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }
    state ={
        currentIndex: null
    }
    handleClick(index){
        this.setState({currentIndex: index})
    }   
    renderSections() {
        return(
            this.props.sections.map((section, index)=> {                    return(
                    <li key={index}>
                        <button onClick={() =>this.handleClick(index)}>
                            {section.title}
                        </button>
                        {/*this.state.currentIndex===index && <p>{section.content}</p>*/}
                        {this.renderSelected(section,index)}
                    </li>
                )
            })
        )
        
        
    }
    renderSelected(section, index){
        if(this.state.currentIndex===index){
            return(
                <p>{section.content}/</p>

            )
        }
    }
    render(){
        return (
        <ul>
            {this.renderSections()}
        </ul>
    )}
}

export default Accordion;