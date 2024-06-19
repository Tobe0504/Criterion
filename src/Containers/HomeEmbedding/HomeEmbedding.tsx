import Button from "../../Components/Button/Button";
import classes from "./HomeEmbedding.module.css";
import embedding from "../../Assets/Images/embedding.svg";

const HomeEmbedding = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textSection}>
        <h4>
          EMBEDDING <span>SUSTAINABILITY</span> INTO EVERYDAY LIVING
        </h4>

        <Button type="secondary">
          <span>{"Read more about us".toUpperCase()}</span>
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.36307 0.119751L8.08108 1.39062L12.9858 6.11082H0.5V7.89493H12.9798L8.08108 12.6094L9.36307 13.8803L16.5 7.00012L9.36307 0.119751Z"
              fill="#A49031"
            />
          </svg>
        </Button>
      </div>

      <img src={embedding} alt="Embedding" />
    </section>
  );
};

export default HomeEmbedding;
