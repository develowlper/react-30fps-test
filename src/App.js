import React, { Component } from 'react';
import './App.css';

import ChatView from './views/ChatView';
import { StoryProvider } from './components/Story';
class App extends Component {
  render() {
    return (
      <StoryProvider>
        <ChatView />
      </StoryProvider> 
    );
  }
}

export default App;
