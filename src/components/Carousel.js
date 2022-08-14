import React, { useState, useEffect } from "react";
import data from "../data";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section mx-auto">
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, name, text } = item;
          let position = "lastSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "nextSlide";
          }
          return (
            <article key={id} className={`${position}`}>
              <p className="md:text-xl 2xl:text-4xl text-sm bg-primary px-10 py-5 md:mb-7 mb-3 rounded-xl text-white text-center font-third">
                {text}
              </p>
              <div className="text-right md:text-xl 2xl:text-3xl text-md flex flex-col">
                <span className="font-bold mr-5">{name}</span>
                <span className="md:w-20 w-14 h-1 bg-barre mt-0 p-0.5 self-end mr-5"></span>
              </div>
            </article>
          );
        })}
        <button
          className="prev left-3 top-[30%]"
          onClick={() => setIndex(index - 1)}
        >
          <svg viewBox="0 0 300.003 300.003" fill="white">
            <path d="M150 0C67.159 0 .001 67.159.001 150c0 82.838 67.157 150.003 149.997 150.003S300.002 232.838 300.002 150C300.002 67.159 232.839 0 150 0zm39.226 218.202a13.968 13.968 0 0 1-9.902 4.101 13.955 13.955 0 0 1-9.902-4.103l-56.295-56.292a13.898 13.898 0 0 1-2.368-1.886c-2.796-2.799-4.145-6.479-4.077-10.144-.065-3.667 1.281-7.35 4.077-10.146a14.146 14.146 0 0 1 2.368-1.886l56.043-56.043c5.47-5.465 14.34-5.467 19.808.003 5.47 5.467 5.47 14.335 0 19.808l-48.265 48.265 48.514 48.516c5.468 5.469 5.468 14.337-.001 19.807z" />
          </svg>
        </button>
        <button
          className="next right-3 top-[30%]"
          onClick={() => setIndex(index + 1)}
        >
          <svg viewBox="0 0 300 300" fill="white">
            <path d="M150 0C67.157 0 0 67.157 0 150c0 82.841 67.157 150 150 150s150-67.159 150-150C300 67.157 232.843 0 150 0zm45.708 160.159a14.146 14.146 0 0 1-2.368 1.886l-56.295 56.295c-2.734 2.736-6.318 4.103-9.902 4.103s-7.166-1.367-9.902-4.103c-5.47-5.47-5.47-14.34 0-19.808l48.509-48.516-48.265-48.265c-5.47-5.473-5.47-14.34 0-19.808 5.47-5.47 14.338-5.467 19.808-.003l56.046 56.043a13.956 13.956 0 0 1 2.365 1.886c2.796 2.796 4.145 6.479 4.082 10.146.066 3.665-1.28 7.346-4.078 10.144z" />
          </svg>
        </button>
      </div>

      <style>
        {`
        .section-center {
          margin: 0 auto;
          margin-top: 4rem;
          width: 80vw;
          height: 250px;
          max-width: 1024px;
          text-align: center;
          position: relative;
          display: flex;
          overflow: hidden;
        }
        
        article {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          margin: 0 auto;
          transition: all 0.3s linear;
        }
        
        article.activeSlide {
          opacity: 1;
          transform: translateX(0);
        }
        article.lastSlide {
          transform: translateX(-100%);
        }
        article.nextSlide {
          transform: translateX(100%);
        }
      
        .prev,
        .next {
          position: absolute;
          transform: translateY(-50%);
          top: 30%;
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
          transition: all 0.3s linear;
        }
        `}
      </style>
    </section>
  );
};

export default Slider;
