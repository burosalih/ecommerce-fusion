import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Dohvatanje bloga");
        const response = await fetch(
          "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog.json"
        );

        console.log(response);
        const data = await response.json();

        // Filtrirajte objekte koji nisu null
        const filteredData = Object.values(data).filter(
          (blog) => blog !== null
        );

        console.log(filteredData);

        setArticles(filteredData);
      } catch (error) {
        console.error("Greška prilikom dohvatanja informativne poruke", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ articles, setArticles }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
