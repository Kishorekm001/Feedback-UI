import React from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/header";
import { useState } from "react";
import FeedbackData from "./data/feedback";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import AboutPage from "./components/pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import AboutLink from "./components/AboutLink";

import { FeedbackProvider } from "./components/context/FeedbackContext";
import FeedbackContext from "./components/context/FeedbackContext";

function App() {
  // const [feedback,setFeedback] = useState((FeedbackData))

  return (
    <FeedbackProvider>
      <Header />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutLink />
              </>
            }
          />

          <Route path="/aboutpage" element={<AboutPage />} />
        </Routes>
      </div>
    </FeedbackProvider>
  );
}

export default App;
