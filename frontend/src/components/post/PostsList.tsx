import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts, type Post } from "../../services/postsApi";
import Pagination from "../navigation/Pagination";
import DetailedPost from "./DetailedPost";

const PostsList = () => {
  const [data, setData] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const perPage = 6;

  const handleCardClick = (post: Post) => {
    setSelectedPost(post);
  };

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      setIsLoading(true);
      try {
        const { data: post, total } = await getPosts();
        if (!mounted) return;

        setData(post);
        setTotalPage(Math.ceil(total / perPage));
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [page]);

  const startIndex = (page - 1) * perPage;
  const filteredPost = data.slice(startIndex, startIndex + perPage);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2 className="my-8 text-3xl font-bold bg-slate-600 bg-clip-text text-transparent">
          Projects
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(perPage)].map((_, i) => (
              <div
                key={i}
                className="h-80 bg-white rounded-2xl shadow-sm animate-pulse"
              >
                <div className="h-48 bg-slate-200 rounded-t-2xl"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPost.length > 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-white/50 p-8 hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPost.map((post: Post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <svg
                className="w-8 h-8 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              No projects found
            </h3>
            <p className="text-slate-600">Check back later for new content</p>
          </div>
        )}

        {totalPage > 1 && (
          <div className="mt-16 flex justify-center">
            <Pagination page={page} totalPage={totalPage} setPage={setPage} />
          </div>
        )}

        {selectedPost && (
          <DetailedPost
            post={selectedPost}
            onClose={() => {
              setSelectedPost(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PostsList;
