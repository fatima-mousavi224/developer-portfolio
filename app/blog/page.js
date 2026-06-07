
import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

// SAFE FETCH: This version won't crash your site if there are no blogs
async function getBlogs() {
  try {
    // If you haven't written blogs yet, we return an empty array []
    if (!personalData.devUsername || personalData.devUsername === "") {
      return [];
    }

    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return [];
  }
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            {blogs.length > 0 ? "Articles & Publications" : "Projects & Contributions"}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map((blog, i) => (
            blog?.cover_image &&
            <BlogCard blog={blog} key={i} priority={i < 3} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-400 text-lg">
            Sharing technical insights soon. Check out my GitHub for active projects!
          </p>
        </div>
      )}
    </div>
  );
};

export default page;

