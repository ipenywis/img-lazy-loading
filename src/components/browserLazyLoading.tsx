import styled from "styled-components";
import { importImagesUrls } from "../utils/images";

// function importAll(r: any) {
//   let images = {} as any;
//   r.keys().forEach((item: string, index: number) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   (require as any).context("../images", false, /\.(png|jpe?g|svg)$/)
// );

// const imagesArr = Object.values(images) as string[];
// console.log("Arr: ", imagesArr);

// const arr = [
//   "/static/media/abhinav-bhardwaj-fOcPg7lM1Fs-unsplash.3aa333d8ba09d9d57813.jpg",
//   "/static/media/ahmed-Zt11rN9HmcY-unsplash.b11592d9531a12bd5b70.jpg",
//   "/static/media/alaksiej-carankievic-3GptzXVSJaU-unsplash.a5c1df89592ff4daef73.jpg",
//   "/static/media/amr-taha-Vu3g3b5F4U4-unsplash.ea1c7fba76bd270f0f4a.jpg",
//   "/static/media/ashok-acharya-dXsTc5QGMcw-unsplash.d4c01f7117bb7ba84893.jpg",
//   "/static/media/bob-van-aubel-1RcDcdEs6Ps-unsplash.d9acb77eb427239dfb53.jpg",
//   "/static/media/camilo-contreras-sjky3mz8NUk-unsplash.d57387853d0c946225af.jpg",
//   "/static/media/daniel-j-schwarz-yfV4K4Vclrw-unsplash.71669203915b229fb631.jpg",
//   "/static/media/eberhard-grossgasteiger-d9-m2uZZLJ0-unsplash.a24590833cb75dee0658.jpg",
//   "/static/media/emma-birman-hmkfNT1EsBs-unsplash.d6171439f6e625d40e2b.jpg",
//   "/static/media/lorenzo-hamers-YX_S0We7ANE-unsplash.c7d2e64f4d65fd8e863c.jpg",
//   "/static/media/marine-le-priol-FmqVSauw0_0-unsplash.46f1b2b3799b80286024.jpg",
//   "/static/media/matteo-vella-YlGUOcKJo0k-unsplash.380aa3c2a985984777d3.jpg",
//   "/static/media/meg-macdonald-h5KTCGyn8f8-unsplash.f63977763367588a0346.jpg",
//   "/static/media/mostafa-world-9O6wWD4HgjE-unsplash.9f1226cbe2abb7a1219d.jpg",
//   "/static/media/priyansu-das-r4CDi82064M-unsplash.6a9589dae7d5709e87b5.jpg",
//   "/static/media/refargotohp-2jL4RPtLt08-unsplash.7b434137a18c0dfc2edc.jpg",
//   "/static/media/s-tsuchiya-TaRDp2i1iaA-unsplash.f8f76021832a5fb2463a.jpg",
//   "/static/media/s-tsuchiya-kDp2CuENruo-unsplash.8757836078e2fc6e7aa4.jpg",
//   "/static/media/sarah-hu-Cl-LTkrsZnk-unsplash.cd7f8ff6968bf35b5bc6.jpg",
//   "/static/media/sina-bahar-DzRY-wNosEw-unsplash.6cc4ebadb0722e5330f6.jpg",
//   "/static/media/sindy-sussengut-9G1kvibCXT4-unsplash.bd78c17f47ffa69736c3.jpg",
//   "/static/media/stephen-leonardi-C4BFwJYrMYs-unsplash.eb416973d51f52f807cf.jpg",
//   "/static/media/taylor-simpson-QfZo4iITFoE-unsplash.b423ba7a1ab382e54b45.jpg",
//   "/static/media/te-lun-ou-yang-gi46vsMcqWs-unsplash.b2bda9ca5e715aa6931c.jpg",
//   "/static/media/thijs-scheper-TaqL0qOGEBM-unsplash.c783d9c4ffdcd8dea608.jpg",
//   "/static/media/wout-vanacker-vE3w6QQrEIg-unsplash.a9d786d51487334ab288.jpg",
//   "/static/media/yves-cedric-schulze-taTm4XcFqTQ-unsplash.9bec573e254fd6f33d24.jpg",
//   "/static/media/zongnan-bao-Vyya5U7odhY-unsplash.62f242afa6723a90f011.jpg",
// ];

const images = importImagesUrls();

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 10px;
  max-width: 1024px;
`;

const Image = styled.img`
  /* height: 500px; */
`;

function BrowserLazyLoading() {
  return (
    <ImagesContainer>
      {images.map((url: string) => (
        //width and height on images are required for the browser to be able to calculate the viewport
        <img
          key={url}
          src={url}
          loading="eager"
          alt="image"
          height="500"
          width="333"
        />
      ))}
    </ImagesContainer>
  );
}

export { BrowserLazyLoading };
