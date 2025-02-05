import Image from "next/image";

const ImageGallery = () => {
  return (
    <div>
      <div className="my-5">

      <h3 className="text-center font-semibold text-[20px] leading-[30px] text-[#616161]">Share your setup with</h3>
      <h2 className="text-center font-bold text-[40px] leading-[48px]">#FuniroFurniture</h2>
      </div>
      <div className="w-full h-[392px] relative">
        <Image
          src="/images/imageGallery.png"
          fill
          alt=""
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
