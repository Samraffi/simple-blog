import { useState, FormEvent } from 'react';
import { BlogPostProps } from '../types/blog';
import { AlertType } from '../types/dialogs';
import { updatePost } from '../services/blogService/updatePost';
import { deletePost } from '../services/blogService/deletePost';
import Alert from './Alert';
import ConfirmDialog from './ConfirmDialog';

export const BlogPost = ({ post, onUpdate }: BlogPostProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [alert, setAlert] = useState<{ isOpen: boolean; message: string; type: AlertType }>({ 
    isOpen: false, 
    message: '', 
    type: 'error' 
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
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

    updatePost({
      ...post,
      title,
      content
    });
    setIsEditing(false);
    onUpdate();
    setAlert({
      isOpen: true,
      message: 'Post updated successfully',
      type: 'success'
    });
  };

  const handleDelete = () => {
    setConfirmDialog({
      isOpen: true,
      title: 'Delete Post',
      message: 'Are you sure you want to delete this post?'
    });
  };

  const confirmDelete = () => {
    deletePost(post.id);
    onUpdate();
    setConfirmDialog(prev => ({ ...prev, isOpen: false }));
    setAlert({
      isOpen: true,
      message: 'Post deleted successfully',
      type: 'success'
    });
  };

  if (isEditing) {
    return (
      <>
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
        <Alert
          isOpen={alert.isOpen}
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))}
        />
      </>
    );
  }

  return (
    <>
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
      <Alert
        isOpen={alert.isOpen}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))}
      />
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};
