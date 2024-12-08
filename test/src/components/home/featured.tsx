import React from "react";
import { ChevronRight } from "lucide-react";
import { LiaCommentsSolid } from "react-icons/lia";
import { TfiTimer } from "react-icons/tfi";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/road.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      categories: ["Google", "Trending", "New"],
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: "/car.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      categories: ["Google", "Trending", "New"],
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: "/umberlla.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      categories: ["Google", "Trending", "New"],
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8 ml-6">
        <p className="text-blue-500 mb-2 font-semibold">Practice Advice</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured Posts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md overflow-hidden">
            {/* Image Container */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Categories */}
              <div className="flex gap-2 mb-3">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
                  >
                    {category}
                    {index < post.categories.length - 1 && (
                      <span className="ml-2">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-montserrat text-gray-900 mb-5">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 font-montserrat mb-5">
                {post.description}
              </p>

              {/* Meta Info */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <TfiTimer className="text-blue-500 text-xl mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <LiaCommentsSolid className="text-blue-500 text-xl mr-2" />
                  <span className="cursor-pointer">
                    {post.comments} comments
                  </span>
                </div>
              </div>

              {/* Learn More Button */}
              <button className="mt-4 flex items-center font-bold text-slate-500 hover:text-slate-400 transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
