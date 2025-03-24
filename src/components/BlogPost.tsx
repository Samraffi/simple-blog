import { useState, FormEvent } from 'react';
import { BlogPostProps } from '../types/blog';
import { updatePost } from '../services/blogService/updatePost';
import { deletePost } from '../services/blogService/deletePost';


export const BlogPost = ({ post, onUpdate }: BlogPostProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Title and content are required');
      return;
    }

    updatePost({
      ...post,
      title,
      content
    });
    setIsEditing(false);
    onUpdate();
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(post.id);
      onUpdate();
    }
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-500">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post content"
          className="w-full p-2 mb-4 border border-gray-300 rounded min-h-[100px] resize-y focus:outline-none focus:border-blue-500"
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Save</button>
          <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <article className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <div className="flex gap-4 text-sm text-gray-500 mb-4">
        <small>Created: {new Date(post.createdAt).toLocaleDateString()}</small>
        {post.updatedAt !== post.createdAt && (
          <small>Updated: {new Date(post.updatedAt).toLocaleDateString()}</small>
        )}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Edit</button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">Delete</button>
      </div>
    </article>
  );
};
