import { importImagesUrls } from "../utils/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { OptimizedImage } from "./optimizedImage";

// const images = importImagesUrls();

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 10px;
  max-width: 1024px;
  content-visibility: visible;
`;

const Image = styled.img`
  height: 500px;
`;

function ReactLazyLoading() {
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState<{ name: string; blurhash: string }[]>(
    []
  );

  const fetchImages = async () => {
    const images = await fetch("http://localhost:9000/images");

    setImages((await images.json()).images);
    console.log("Images: ", await images.json());
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <ImagesContainer>
      {images.map((image) => (
        <LazyLoadImage
          key={image.name}
          src={`http://localhost:9000/${image.name}`}
          height={500}
          width={333}
          effect="blur"
          placeholderSrc={`http://localhost:9000/${image.name}`}
        />
      ))}
    </ImagesContainer>
  );
}

export { ReactLazyLoading };
