import styles from "./Accomplishments.module.css";

const Accomplishments = () => {
  return (
    <div className={styles.container}>
      <div className={column1}>
        <img className="cols_img" src="" alt="" />

        <p className={styles.explanation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni
          earum eius a, voluptas neque! Velit, corporis cum voluptate
          consequatur nesciunt voluptatem! Maxime, dolorum deserunt illo aut
          voluptate provident aperiam!
        </p>

        <p className={styles.explanation}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          iure, sunt nulla aliquid accusantium recusandae officia dolores omnis
          deserunt ducimus mollitia nesciunt ipsam ab beatae inventore! Facere,
          laudantium? Earum, nam.
        </p>
      </div>
    </div>
  );
};

export default Accomplishments;
