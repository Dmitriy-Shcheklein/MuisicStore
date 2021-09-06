import { Component } from 'react';
import ErrorIndicator from './ErrorIndicator';

type ErrorBoundaryState = {
  hasError: boolean,
}

export default class ErrorBoundary extends Component<{}, ErrorBoundaryState> {

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }


  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    } else {
      return this.props.children
    }
  }
}
