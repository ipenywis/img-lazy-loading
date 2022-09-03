import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserLazyLoading } from "./components/browserLazyLoading";
import styled from "styled-components";
import { ReactLazyLoading } from "./components/reactLazyLoading";
import { BlurHashLazyLoading } from "./components/blurhashLazyLoading";

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
      {/* <BrowserLazyLoading /> */}
      {/* <ReactLazyLoading /> */}
      <BlurHashLazyLoading />
    </AppContainer>
  );
}

export default App;
