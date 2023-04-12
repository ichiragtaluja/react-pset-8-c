import { createContext, useEffect } from "react";
import { useState } from "react";

export const DataContext = createContext();

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/questions") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            questions: [
              {
                id: 1,
                question:
                  "What is the difference between null and undefined in JavaScript?",
                answer:
                  "Null means a variable has been declared but has no value. Undefined means a variable has not been declared or has not been assigned a value.",
              },
              {
                id: 2,
                question:
                  "What is the difference between let and var in JavaScript?",
                answer:
                  "Let is block-scoped and var is function-scoped. Variables declared with let can only be accessed within the block they are declared, while variables declared with var can be accessed anywhere within the function they are declared.",
              },
              {
                id: 3,
                question: "What is an arrow function in JavaScript?",
                answer:
                  "An arrow function is a concise way to write a function in JavaScript. It uses the '=>' operator and does not have its own 'this' keyword, so it inherits 'this' from the parent scope.",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Questions not found.",
        });
      }
    }, 2000);
  });
};

export function DataProvider({ children }) {
  const [questionsAnswers, setQuestionsAnswers] = useState([]);
  const getQuestions = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/questions");
      if (response.status === 200) {
        setQuestionsAnswers(response.data.questions);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <DataContext.Provider value={{ questionsAnswers }}>
      {children}
    </DataContext.Provider>
  );
}
