import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal.jsx";

const SkeletonCard = () => (
  <div className="bg-gray-300 animate-pulse w-96 h-64 rounded-xl shadow-md" />
);
const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${baseURL}/project`);
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects", err);
        setError("Something went wrong while fetching Projects");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [baseURL]);
  if (error) {
    return <p>{error}</p>;
  }
  const openModal = (project) => {
    setModalOpen(true);
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section className="xl:px-30 xl:py-20 ">
      <div className="flex flex-col items-center xl:p-5 xl:mt-12 xl:gap-3">
        <p className="text-[#B4A734]">Projects</p>
        <h1 className="text-[#0F2917] text-2xl font-semibold max-xl:w-[250px] max-xl:text-center">
          Your Vision. Our Execution. Exceptional Results.
        </h1>
      </div>
      {loading ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <section className="flex max-xl:flex-col  xl:gap-10 max-xl:gap-10 justify-center items-center mt-4">
          {projects.map((project) => (
            <div
              key={project._id}
              onClick={() => openModal(project)}
              className="cursor-pointer"
            >
              <img
                src={`${baseURL}/${project.coverImage}`}
                alt={project.name}
                className="w-96 h-64 object-cover rounded-xl max-xl:w-90"
              />
              <p className="max-xl:text-md xl:text-xl font-semibold mt-2 text-[#0F2917]">
                {project.name}
              </p>
            </div>
          ))}
        </section>
      )}

      {modalOpen && (
        <Modal
          project={selectedProject}
          onClose={closeModal}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          baseURL={baseURL}
        />
      )}
    </section>
  );
};

export default AllProjects;
