// types.ts
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Comment = {
  id: string;
  content: string;
  postId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PostComments = Post & {
  comments: Comment[];
};

export type UserPosts = User & {
  posts: Post[];
};

export type PostWithUser = Post & {
  user: User;
};

export type UserWithPosts = User & {
  posts: PostWithUser[];
};

export type CommentWithUserAndPost = Comment & {
  user: User;
  post: Post;
};

export type CommentWithUser = Comment & {
  user: User;
};

export type CommentWithPost = Comment & {
  post: Post;
};

export type PostWithComments = Post & {
  comments: CommentWithUser[];
};

export type UserWithComments = User & {
  comments: CommentWithUser[];
};

export type CommentWithUserAndPostWithComments = CommentWithUserAndPost & {
  replies: CommentWithUserAndPost[];
};

export type CommentWithUserWithComments = CommentWithUser & {
  replies: CommentWithUser[];
};

export type CommentWithPostWithComments = CommentWithPost & {
  replies: CommentWithPost[];
};

export type PostWithCommentsWithReplies = PostWithComments & {
  replies: PostWithComments[];
};

export type UserWithPostsWithComments = UserWithPosts & {
  comments: UserWithComments[];
};

export type UserWithPostsAndCommentsWithReplies = UserWithPosts & {
  comments: UserWithCommentsWithReplies[];
};

export type CommentWithUserAndPostWithCommentsWithReplies = CommentWithUserAndPost & {
  replies: CommentWithUserAndPostWithComments[];
};

export type CommentWithUserWithCommentsWithReplies = CommentWithUser & {
  replies: CommentWithUserWithComments[];
};

export type CommentWithPostWithCommentsWithReplies = CommentWithPost & {
  replies: CommentWithPostWithComments[];
};