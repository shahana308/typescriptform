/** @format */

import { useState } from "react";
import "./App.css";
import { Button } from "@chakra-ui/react";
import BaseModalWrapper from "./components/BaseModalWrapper";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((isModalVisible) => !isModalVisible);
  };

  return (
    <div className="App">
      <Button onClick={toggleModal}>Show Modal</Button>
      <BaseModalWrapper
        header="ID8 APP"
        message="Tell us about your idea"
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </div>
  );
}

export default App;
