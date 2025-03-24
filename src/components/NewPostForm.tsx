import { useState, FormEvent } from 'react';
import { createPost } from '../services/blogService/createPost';
import { NewPostFormProps } from '../types/blog';
import { AlertType } from '../types/dialogs';
import Alert from './Alert';

export const NewPostForm = ({ onPostCreated }: NewPostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [alert, setAlert] = useState<{ isOpen: boolean; message: string; type: AlertType }>({
    isOpen: false,
    message: '',
    type: 'error'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setAlert({
        isOpen: true,
        message: 'Title and content are required',
        type: 'error'
      });
      return;
    }

    createPost({
      title: title.trim(),
      content: content.trim()
    });
    setTitle('');
    setContent('');
    onPostCreated();
    setAlert({
      isOpen: true,
      message: 'Post created successfully',
      type: 'success'
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h2>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post content"
            className="w-full p-2 border border-gray-300 rounded min-h-[100px] resize-y focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          Create Post
        </button>
      </form>
      <Alert
        isOpen={alert.isOpen}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};
