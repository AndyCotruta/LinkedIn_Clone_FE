import { useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlinePlus } from "react-icons/hi";
import ExperienceModal from "./ExperienceModal";
import { useParams } from "react-router-dom";
import ExpCard from "./ExpCard";

const Experience = ({ currentProfile }) => {
  const params = useParams();

  const myProfile = useSelector((state) => state.profiles.myProfile);

  const [showModal, setShowModal] = useState(false);

  const experiences = currentProfile.experiences;

  return (
    <div className="experience-section ">
      <ExperienceModal
        setShowModal={setShowModal}
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
      <div className="d-flex experience-subsection">
        <h3 className="activity-title fs-20 fw-700 d-block d-flex align-items-center">
          Experience
        </h3>
        {/* this gets displayed when on user page */}
        {myProfile._id === params.userId && (
          <div>
            <>
              <button
                className="experience-buttons"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <HiOutlinePlus className="experience-buttons-icon" />
              </button>
            </>
          </div>
        )}

        {/* end here */}
      </div>
      {experiences?.map((experience, i) => (
        <ExpCard
          key={i}
          experience={experience}
          index={i}
          currentProfile={currentProfile}
        />
      ))}
    </div>
  );
};

export default Experience;
