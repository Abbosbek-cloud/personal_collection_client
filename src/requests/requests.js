import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/base";

const token = localStorage.getItem("token");

async function getLastItems() {
  const res = await axios({
    url: `${BASE_URL}/`,
  });
}

async function getOneItem() {
  const res = await axios({
    url: `${BASE_URL}`,
  });
}

export async function editProfile(data, message) {
  try {
    const res = await axios({
      url: `${BASE_URL}/user/profile`,
      method: "put",
      headers: {
        authorization: `1234567${token}`,
      },
      data,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.editedUser));

    toast.success(message);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserItems() {}
