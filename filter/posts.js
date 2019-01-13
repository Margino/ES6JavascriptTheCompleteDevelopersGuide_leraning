const post     = { id: 4, title: 'New post' };
const comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok'},
    { postId: 4, content: 'neat' }
];

const commentsForPost = (post, comments) => {
    return comments.filter((comment) => comment.postId === post.id);
};

console.log(commentsForPost(post, comments));
