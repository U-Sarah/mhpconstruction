import { useNavigate } from "react-router-dom";


const BlogCard = ({ _id, image, title, topic, time, content }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/blog/${_id}`);
  };
  return (
    <div className="w-full max-w-[500px]">
      {/* blog image */}
      <img
        src={image}
        alt="blog thumbnail"
        width={500}
        height={300}
        className=" rounded-lg object-cover max-xl:w-[400px] max-xl:h-[250px]"
      />
      <div className="flex gap-3 mt-4 mb-4">
        <h6 className="p-1 rounded-xl text-sm bg-[#F1F1F1] text-[#0F2917] font-bold">
          {title}
        </h6>
        <h6 className="text-sm p-1 font-semibold">{time}</h6>
      </div>
      <h1 className="text-xl font-semibold">{topic}</h1>
      <p className="line-clamp-3 text-sm leading-5 w-full max-w-[350px] text-[#3F5445] font-medium tracking-wide">
        {content}..{" "}
        <span onClick={handleReadMore} className="text-[#B4A734] underline cursor-pointer inline" >
          Read More
        </span>
      </p>
    </div>
  );
};

export default BlogCard;
