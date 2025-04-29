export default function Flip({ image, explain, title }) {
  return (
    <div className=" w-full h-[350px]  perspective-distant group">
      <div className="w-full h-full transform-3d transition-transform duration-1000 group-hover:rotate-y-180 relative rounded-lg">
        <div className="w-full h-full absolute backface-hidden rounded-lg overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="backface-hidden absolute w-full h-full bg-mainColor rotate-y-180 rounded-lg flex flex-col items-center justify-center px-4 gap-y-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm  text-justify">{explain}</p>
        </div>
      </div>
    </div>
  );
}
