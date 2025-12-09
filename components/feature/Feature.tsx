import Image from "next/image";
import styles from "./feature.module.css";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const Feature = ({ title, description, image }: FeatureProps) => {
  return (
    <div className={styles.feature}>
      <Image src={image} alt={title} width={140} height={140} priority />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
