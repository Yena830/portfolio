import React from "react";
import { CodeBracketIcon, EyeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, onOpenModal }) => {
  return (
    <div className="cursor-default">
      <div
        className="w-full h-52 md:h-72 rounded-t-xl relative group bg-[#171615]"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#171615]  bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          {gitUrl && gitUrl !== "/" ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-10 border-2 relative rounded-full  border-pink-300 hover:border-white"
            >
              <CodeBracketIcon className="h-10 w-10 text-pink-300 group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </Link>
          ) : (
            <div
              className="h-14 w-14 mr-10 border-2 relative rounded-full  border-zinc-600/70 cursor-not-allowed"
              title="Private repository"
              aria-label="Private repository"
            >
              <LockClosedIcon className="h-10 w-10 text-zinc-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
          <button
            type="button"
            className="h-14 w-14 border-2 relative rounded-full  border-pink-300 hover:border-white"
            onClick={(e) => { e.stopPropagation(); onOpenModal && onOpenModal(); }}
            aria-label="Open preview"
          >
            <EyeIcon className="h-10 w-10 text-pink-300 group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#312d2f] py-4 px-4 mb-6">
        <h5 className="text-xl font-semibold mb-2 truncate">{title}</h5>
        <p className="text-pink-100 text-base truncate">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
