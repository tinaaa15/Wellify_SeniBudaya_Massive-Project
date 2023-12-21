import Ulas from "../models/UlasModel.js";
import bcrypt from "bcrypt";

export const getUlas = async (req, res) => {
  try {
    const ulas = await Ulas.findAll();
    res.json(ulas);
  } catch (error) {
    console.log(error);
  }
};

export const Ulaster = async (req, res) => {
  const { name, pesan } = req.body;
  try {
    await Ulas.create({
      name: name,
      pesan: pesan
    });
    res.json({ message: "Pesan created successfully" });
  } catch (error) {
    console.log(error);
  }
};
