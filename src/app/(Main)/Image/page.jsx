import Image from "next/image";
import TeamImage from "@/app/images/iwjjiwxj.jpg"

const ImagePage = () => {
  return (
    <div>
      <Image width={500} height={500} src={"/images.jpg"} alt="team"></Image>
      <Image width={500} height={500} src={TeamImage} alt="image"></Image>
      <Image width={500} height={500} src={"https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="image"></Image>
      <Image width={500} height={500} src={"https://images.pexels.com/photos/9587176/pexels-photo-9587176.jpeg"} alt="image"></Image>
    </div>
  );
};

export default ImagePage;