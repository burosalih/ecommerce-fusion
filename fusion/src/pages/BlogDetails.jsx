import { useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog/" +
            id +
            ".json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();

        const articles = Object.values(data);

        setArticles(articles);
      } catch (error) {
        console.error("Error fetching articles", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="pt-32 bg-gray-100 h-screen">
      <div className="container mx-auto flex-col">
        {/* Image */}
          <div className="bg-white rounded-md shadow-lg md:w-1/3 mb-4 md:mb-2 md:mr-4 md:float-left">
            <img
              src={"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
              alt={articles[1]}
              className="max-h-[500px] object-cover w-full"
            />
          </div>
        {/* Content */}
        <div className="md:w-full p-4">
          {/* Naslov */}
          <h2 className="text-2xl font-semibold mb-2">{articles[1]}</h2>
          {/* Opis */}
          <p className="text-gray-600">{articles[2]}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
