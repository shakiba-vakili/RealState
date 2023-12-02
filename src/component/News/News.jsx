import React, { useEffect } from "react";
import "./News.css";
import Aos from "aos";
import "aos/dist/aos.css";
// get data from backend in future
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get("https://api.example.com/news");
//         setNews(response.data);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

const mockNewsData = [
  {
    id: 1,
    title: "Breaking News 1",
    description: "This is the first breaking news article.",
  },
  {
    id: 2,
    title: "Important Update",
    description: "An important update you shouldn't miss.",
  },
  {
    id: 3,
    title: "Feature Story",
    description: "A feature story that explores interesting topics.",
  },
  {
    id: 4,
    title: "Breaking News 4",
    description: "A feature story that explores interesting topics.",
  },
  {
    id: 5,
    title: "Breaking News 1",
    description: "This is the first breaking news article.",
  },
  {
    id: 6,
    title: "Important Update",
    description: "An important update you shouldn't miss.",
  },
  {
    id: 7,
    title: "Feature Story",
    description: "A feature story that explores interesting topics.",
  },
  {
    id: 8,
    title: "Breaking News 4",
    description: "A feature story that explores interesting topics.",
  },
  {
    id: 9,
    title: "Important Update",
    description: "An important update you shouldn't miss.",
  },
  {
    id: 10,
    title: "Feature Story",
    description: "A feature story that explores interesting topics.",
  },
];

const News = () => {
  //scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
      <section className="news container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            News
          </h3>
        </div>
        <div className="newsArticle">
          <div data-aos="fade-up" class="card">
            {mockNewsData.map((article) => (
              <div key={article.id} class="content">
              <p class="heading">{article.title}
              </p><p class="para">
              {article.description}
              </p>
              <button class="btn">Read more</button>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default News;
