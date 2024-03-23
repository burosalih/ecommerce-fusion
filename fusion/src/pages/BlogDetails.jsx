import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function BlogDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      console.log(id);
      try {
        const response = await fetch(
          `https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/blog/0/blog/${id}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }

        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article", error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <section className="pt-28 pb-32 mb-16 h-full">
      <div className="container mx-auto flex-col">
        {article && (
          <>
            <div className="bg-white rounded-md shadow-lg md:w-1/3 mb-4 md:mb-2 md:mr-4 md:float-left">
              <img
                src={require(`../blog/${article.slika}.jpg`)}
                alt={article.naslov}
                className="max-h-[500px] object-cover w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-full p-4">
              <h2 className="text-2xl font-semibold mb-2">{article.naslov}</h2>
              <p className="text-gray-600">{article.opis}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default BlogDetails;
