const getCommentsHandler = (req, res) => {
  res.send("Get comments route");
};

const getSingleCommentHandler = (req, res) => {
  res.send(`Get comment route. Comment ID: ${req.params.commentId}`);
};

const postCommentsHandler = (req, res) => {
  res.send("Post comments route");
};

const deleteSingleCommentHandler = (req, res) => {
  res.send(`Delete comment route. Comment ID: ${req.params.commentId}`);
};

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
};
