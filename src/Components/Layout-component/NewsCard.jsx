import { FaRegEye } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfStroke } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const { author, title, thumbnail_url, details, rating, total_view } = news;

  // Dynamic star generation
  const renderStars = () => {
    const fullStars = Math.floor(rating.number);
    const halfStar = rating.number - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} className="text-orange-400 text-lg" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfStroke key="half" className="text-orange-400 text-lg" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<AiOutlineStar key={`empty-${i}`} className="text-orange-400 text-lg" />);
    }

    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-xl border rounded-lg  m-4">
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={author.img} alt="Author" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-xs text-gray-500">{new Date(author.published_date).toDateString()}</p>
        </div>
      </div>

      <div className="px-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
      </div>

      <figure className="px-4 pt-2">
        <img src={thumbnail_url} alt="Thumbnail" className="w-full h-72 object-cover rounded-md" />
      </figure>

      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.length > 100 ? details.slice(0, 100) + "..." : details}
          <span className="text-blue-500 font-semibold cursor-pointer"> Read More</span>
        </p>
      </div>

      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center gap-1">
          {renderStars()}
          <span className="ml-2 font-semibold text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
