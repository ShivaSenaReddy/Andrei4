import React from 'react'

class Card extends React.Component {
    
    render() {
        
        return (
            <div className='bg-light-green Card dib br3 pa3 ma2 grow bw2 shadow5'>
                <img src={`https://robohash.org/${this.props.id}?200x200`} alt='image'/>
                <h2>{this.props.name}</h2>
                <h2>{this.props.email}</h2>
                </div>
        );
    }
}

export default Card;