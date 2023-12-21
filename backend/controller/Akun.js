import Akun from "../models/akunModels.js";
import bcrypt from "bcrypt";

export const getAkun = async (req, res) => {
  try {
    const akun = await Akun.findAll();
    res.json(akun);
  } catch (error) {
    console.log(error);
  }
};

export const Akunter = async (req, res) => {
  const { nama, namaPengguna, email, location, password, bio, profesi, gambar } = req.body;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Akun.create({
      nama: nama,
      namaPengguna: namaPengguna,
      email: email,
      location: location,
      password: hashPassword,
      bio: bio,
      profesi: profesi,
      gambar: gambar
    });
    res.json({ message: "Akun created successfully" });
  } catch (error) {
    console.log(error);
  }
};
