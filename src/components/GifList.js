import React, { Component } from 'react';

class GifList extends Component {

render() {
  return(
    <div>
    <h3>GIFS</h3>
    <ul>
    {this.props.gifs.map(gif =>
<li key={gif.id}><img src={gif.images.original.url} alt='gifs gonna be here!!!!'/></li>)}
    </ul>
      </div>
  )
}

}

export default GifList
