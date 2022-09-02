import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserLazyLoading } from "./components/browserLazyLoading";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <h2>Lazy Loading Images</h2>
      <BrowserLazyLoading />
    </AppContainer>
  );
}

export default App;
