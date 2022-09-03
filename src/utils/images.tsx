function importAll(r: any) {
  let images = {} as any;
  r.keys().forEach((item: string, index: number) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export function importImagesUrls() {
  const imagesObject = importAll(
    (require as any).context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  return Object.values(imagesObject) as string[];
}
