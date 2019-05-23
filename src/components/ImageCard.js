import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      spans: 0
    };
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 5) + 2;
    this.setState({spans});
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const {urls, description} = this.props.image;
    return (<div style={{
        gridRowEnd: `span ${this.state.spans}`
      }}>
      <img ref={this.imgRef} src={urls.regular} alt={description}/>
    </div>);
  }
}
