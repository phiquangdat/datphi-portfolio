import React from "react";
import type { Post } from "../../services/postsApi";

type PostDetailModalProps = {
  post: Post;
  onClose: () => void;
};

import { icons } from "../../constants/techIcons";

const PostDetailModal: React.FC<PostDetailModalProps> = ({ post, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
        e.stopPropagation();
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <div className="flex justify-between mx-4 mb-6">
          <h1 className="text-3xl font-bold font-serif text-slate-900 leading-tight flex-1">
            {post.title}
          </h1>
          {post.link && (
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap group self-start sm:self-center"
            >
              <svg
                className="w-5 h-5 fill-white transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">GitHub</span>
            </a>
          )}
        </div>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-contain rounded-md mb-6"
        />
        <div className="flex flex-wrap gap-2.5 my-2">
          {post.languages?.map((lang) => {
            const fullTechKey = lang.toLowerCase().replace(/[\s\.\-]/g, "");

            if (icons[fullTechKey]) {
              return (
                <div
                  key={lang}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  <img
                    src={icons[fullTechKey]}
                    alt={`${lang} icon`}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {lang}
                  </span>
                </div>
              );
            }

            return lang.split(/\s+/).map((word) => {
              const wordKey = word.toLowerCase().replace(/[\s\.\-]/g, "");
              const wordIcon = icons[wordKey];

              return (
                <div
                  key={`${lang}-${word}`}
                  className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                >
                  {wordIcon && (
                    <img
                      src={wordIcon}
                      alt={`${word} icon`}
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                    />
                  )}
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {word}
                  </span>
                </div>
              );
            });
          })}
        </div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default PostDetailModal;
