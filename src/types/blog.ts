export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostProps {
  post: BlogPost;
  onUpdate: () => void;
}

export interface BlogState {
  posts: BlogPost[];
}

export interface NewPostFormProps {
  onPostCreated: () => void;
}
