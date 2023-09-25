const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/applications/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

// /api/applications/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);


module.exports = router;
