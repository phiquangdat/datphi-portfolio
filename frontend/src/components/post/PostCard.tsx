import React from "react";
import type { Post } from "../../services/postsApi";

type PostCardProps = {
  post: Post;
  onCardClick: (post: Post) => void;
};

const PostCard: React.FC<PostCardProps> = React.memo(
  ({ post, onCardClick }) => {
    const { title, description, date, link, imageUrl } = post;

    return (
      <div
        className="my-4 w-full max-w-sm cursor-pointer"
        key={post.id}
        onClick={() => onCardClick(post)}
      >
        <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden h-full flex flex-col">
          <div className="block relative overflow-hidden">
            <img
              src={imageUrl}
              alt={`Image for ${title}`}
              className="w-full h-52 object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col p-6 flex-grow">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h2 className="text-xl font-bold text-gray-900 font-serif line-clamp-2 flex-grow leading-tight">
                {title}
              </h2>
              {link && (
                <a
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-github text-base"></i>
                </a>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-auto leading-relaxed line-clamp-3 min-h-[4.5rem]">
              {description}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">{date}</span>
              <span className="text-gray-300">•</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PostCard;
