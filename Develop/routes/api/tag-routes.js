const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findAll({
      include: [ { model: Product, as: 'tags' }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const productData = await Tag.findByPk({
      include: [ { model: Product, as: 'tags' }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', (req, res) => {
  // create a new tag

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
