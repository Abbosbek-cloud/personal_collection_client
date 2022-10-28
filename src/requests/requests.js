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

// delete actions

export async function deleteCollection(collectionId, callBack) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/collections/${collectionId}`,
      method: "delete",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    console.log(res);

    callBack();
    toast.success(res.data.message);
  } catch (error) {
    console.log(error);
  }
}

// get all topics

export async function getAllTopics(setData) {
  try {
    const result = await axios({
      url: `${BASE_URL}/user/topics`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });
    console.log(result.data);
    console.log(result);
    setData(result.data.topics);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserItems(setData) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/user/items`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    setData(res.data.userData);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserCollections() {
  try {
    const res = await axios({
      url: `${BASE_URL}/collections/user`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });
    console.log(res.data);
    return res.data.userCollections;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getOneCollection(id, setFieldValue) {
  try {
    const res = await axios({
      url: `${BASE_URL}/collections/${id}`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    const { description, image, name, topic } = res.data;

    setFieldValue("image", res?.data?.image);
    setFieldValue("name", res?.data?.name);
    setFieldValue("description", res?.data?.description);
    setFieldValue("topic", res?.data?.topic);
  } catch (err) {
    console.log(err);
  }
}
