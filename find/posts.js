const posts = [
    { id: 1, title: 'New post' },
    { id: 2, title: 'Old post' }
];

const comment = {
    postId: 1,
    comment: 'Great post'
};

const postForComment = (posts, comment) => {
    return posts.find((post) => post.id === comment.postId);
};
console.log(postForComment(posts, comment));
