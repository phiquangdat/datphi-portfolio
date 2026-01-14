export interface Post {
  id?: number;
  title: string;
  description: string;
  date: string;
  videoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  languages?: string[];
}

// Build API base URL robustly: ensure there's no duplicate or missing slash
const rawBase = import.meta.env.VITE_API_URL ?? "/";
const trimmed = rawBase.replace(/\/+$/, "");
const API_BASE_URL = `${trimmed}/api`;

export async function getPosts(): Promise<{ data: Post[]; total: number }> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    return {
      data: posts,
      total: posts.length,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error(
      `Failed to fetch posts: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function getPost(id: number): Promise<Post> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(
      `Failed to fetch post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function createPost(
  post: Omit<Post, "id" | "created_at">
): Promise<Post> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error(
      `Failed to create post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function updatePost(
  id: number,
  post: Partial<Post>
): Promise<Post> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error(
      `Failed to update post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export async function deletePost(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error(
      `Failed to delete post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}
