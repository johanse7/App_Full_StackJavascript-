const express = require('express');


const processText = (app) => {
  const router = express.Router();
  app.use('/api/processText', router);

  router.get('/:text',
    (request, response, next) => {
      try {
        const { text } = request.params;
        response.status(200).json({
          text
        });
      } catch (error) {
        next(error);
      }
    });


};

module.exports = processText;