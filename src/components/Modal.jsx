import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Modal = ({
  project,
  currentSlide,
  onClose,
  nextSlide,
  prevSlide,
  baseURL,
}) => {
  if (!project) return null;
  return (
    <section className="fixed inset-0 flex justify-center items-center  backdrop-blur-sm z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-md w-full shadow-lg">
        <button
          className="absolute top-2 right-3 text-2xl font-bold cursor-pointer"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <h3 className="text-lg font-semibold text-center mb-4">
          {project.name}
        </h3>
        <div className="relative">
          <img
            src={`${baseURL}/${project.gallery[currentSlide]}`}
            alt="Slide"
            className="w-64 h-64 object-cover rounded-md flex flex-col justify-center items-center mx-auto"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
          >
            <MdArrowBackIos />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
