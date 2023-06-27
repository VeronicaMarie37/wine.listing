const Wine = require('../models/wineModel');

// Index - GET /
exports.getWines = (req, res) => {
  res.render('index', { wines });
};

// New - GET /wines/new
exports.getNewWine = (req, res) => {
  res.render('new');
};

// Create - POST /wines
exports.createWine = (req, res) => {
  const { name, type, origin } = req.body;
  const newWine = new Wine(name, type, origin);
  wines.push(newWine);
  res.redirect('/');
};

// Show - GET /wines/:id
exports.getWine = (req, res) => {
  const id = req.params.id;
  const wine = wines[id];
  res.render('show', { wine });
};

// Edit - GET /wines/:id/edit
exports.getEditWine = (req, res) => {
  const id = req.params.id;
  const wine = wines[id];
  res.render('edit', { wine });
};

// Update - PUT /wines/:id
exports.updateWine = (req, res) => {
  const id = req.params.id;
  const { name, type, origin } = req.body;
  wines[id].name = name;
  wines[id].type = type;
  wines[id].origin = origin;
  res.redirect('/');
};

// Delete - DELETE /wines/:id
exports.deleteWine = (req, res) => {
  const id = req.params.id;
  wines.splice(id, 1);
  res.redirect('/');
};
