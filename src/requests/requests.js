import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/base";

const token = localStorage.getItem("token");

async function getLastItems() {
  const res = await axios({
    url: `${BASE_URL}/`,
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

export async function getAllTopics(setTopic) {
  try {
    const result = await axios({
      url: `${BASE_URL}/user/topics`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });
    setTopic(result.data.topics);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserItems() {
  try {
    const res = await axios({
      url: `${BASE_URL}/items/user`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    return res.data.items;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneItem(id) {
  try {
    const res = await axios({
      url: `${BASE_URL}/items/${id}`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
}

export async function createItem(data) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/items`,
      method: "post",
      headers: {
        authorization: `1234567${token}`,
      },
      data,
    });

    toast.success(res.data.message);
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
}

export async function deleteItem(id, callBack) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/items/${id}`,
      method: "delete",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    callBack();
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

    setFieldValue("image", res?.data?.image);
    setFieldValue("name", res?.data?.name);
    setFieldValue("description", res?.data?.description);
    setFieldValue("topic", res?.data?.topic);
  } catch (err) {
    console.log(err);
  }
}

export async function createCollection(data) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/collections`,
      method: "post",
      headers: {
        authorization: `1234567${token}`,
      },
      data,
    });

    console.log(res.data);

    toast.success(res.data.message);
  } catch (error) {
    toast.success(error.response.data.message);
  }
}

export async function editCollection(id, data) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/collections/${id}`,
      method: "put",
      data,
      headers: {
        authorization: `1234567${token}`,
      },
    });

    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

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
