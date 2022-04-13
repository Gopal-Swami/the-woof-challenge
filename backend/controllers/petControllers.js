import asyncHandler from 'express-async-handler';
import Pet from '../models/Pet.js';

const createPetProfile = asyncHandler(async (req, res) => {
  const { user, name, breed, age, gender } = req.body;
  let profile = req.file
    ? req.file.path.split('public')[1]
    : '\\images\\petAvatar.png';

  const pet = await Pet.create({
    user,
    name,
    breed,
    age,
    gender,
    profile,
  });

  if (pet) {
    res.status(201).json(pet);
  } else {
    res.status(400);
    throw new Error('Invalid pet data');
  }
});

export { createPetProfile };
