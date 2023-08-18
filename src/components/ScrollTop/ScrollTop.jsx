import React, { Component } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './ScrollTop.styled';

class ScrollButton extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisible);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleVisible);
  }

  toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      this.setState({ visible: true });
    } else if (scrolled <= 300) {
      this.setState({ visible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <Button>
        <FaArrowCircleUp
          onClick={this.scrollToTop}
          style={{ display: this.state.visible ? 'inline' : 'none' }}
        />
      </Button>
    );
  }
}

export default ScrollButton;
