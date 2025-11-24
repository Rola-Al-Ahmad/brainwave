import { service2 } from "../../../assets";
import { PhotoChatMessage } from "../../../components/design/Services";

const ServicePhotoEditing = () => {
  return (
    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={service2}
          alt="AI Photo Editing Demo"
          className="w-full h-full object-cover"
          width={630}
          height={750}
          loading="lazy"
        />
      </div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90
                            lg:p-15"
      >
        <h4 className="h4 mb-4">Photo Editing</h4>
        <p className="body-2 mb-[3rem] text-n-3">
          Automatically enhance your photos using our AI app&apos;s photo
          editing feature. Try it now!
        </p>
      </div>
      <PhotoChatMessage />
    </div>
  );
};

export default ServicePhotoEditing;
