import React from "react";

import { createContext, useState, useEffect } from "react";

import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetching json file from server using async and await

  // const fetchFeedback = async() => {
  //         const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")

  //         const data = await response.json()

  //         setFeedback(data)
  //         setIsLoading(false)

  // }

  // Fetching json file using axios library

  const fetchFeedback = () => {
    axios
      .get("http://localhost:5000/feedback?_sort=id&_order=desc") // sorted in descending order though parameters based on id
      // axios.get("C:/React main/feedback/src/data/feedback.js")
      .then((response) => {
        setFeedback(response.data);
        // console.log(response.data)
        setIsLoading(false);
      })

      .catch((err) => {
        return err;
      });
  };

  // adding item

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // deleting item

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // editing item

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // updating item

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
