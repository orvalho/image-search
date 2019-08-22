import React from 'react';
import PropTypes from 'prop-types';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      spans: 0
    };
  }

  static propTypes = {
    image: PropTypes.shape({
      urls: PropTypes.shape({
        regular: PropTypes.string.isRequired
      }).isRequired,
      description: PropTypes.string
    }).isRequired
  };

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
