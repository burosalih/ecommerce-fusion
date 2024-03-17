import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await fetch('endpoint');
          if (!response.ok) {
            throw new Error('Failed to fetch articles');
          }
          const data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          console.error('Error fetching articles', error);
        }
      };
  
      fetchArticles();
    }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section className="py-28">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold my-10 text-center">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 mb-12">
          {articles.map((article) => (
            <div key={article.id} className="border border-gray-300 rounded-md">
              <Link to={`/blog/${article.id}`} className="block hover:opacity-80">
                <img src={article.imageUrl} alt={article.naslov} className="w-full h-48 object-cover rounded-t-md" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{article.naslov}</h2>
                  <p className="text-gray-600">{truncateDescription(article.opis, 100)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
