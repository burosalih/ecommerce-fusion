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
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-10 max-w-sm mx-auto md:max-w-none md:mx-0 mb-12">
          <div className="bg-white rounded-md shadow-lg">
            {/* Slika */}
            <img
              src={articles.slika}
              alt={articles[1]}
              className="w-full h-48 object-cover rounded-t-md"
            />
          </div>
        </div>
        {/* Naslov */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{articles[1]}</h2>
          {/* Opis */}
          <p className="text-gray-600">{articles[2]}</p>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
