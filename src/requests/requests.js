import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants/base";

const token = localStorage.getItem("token");

export async function getLastItems() {
  try {
    const res = await axios({
      url: `${BASE_URL}/items/latest`,
      method: "get",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllItems(setLoading) {
  setLoading(true);
  try {
    setLoading(false);
    const res = await axios({
      url: `${BASE_URL}/items`,
      method: "get",
    });
    return res.data;
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function getLatestCollections() {
  try {
    const res = await axios({
      url: `${BASE_URL}/collections/latest`,
      method: "get",
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCollections(setLoading) {
  setLoading(true);
  try {
    setLoading(false);
    const res = await axios({
      url: `${BASE_URL}/collections`,
      method: "get",
    });

    return res.data;
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function editProfile(data, message) {
  try {
    const res = await axios({
      url: `${BASE_URL}/user/profile`,
      method: "put",
      headers: {
        authorization: `1234567${token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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

export async function editItem(id, data) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/items/${id}`,
      method: "put",
      headers: {
        authorization: `1234567${token}`,
      },
      data,
    });

    console.log(res);

    toast.success("Saved successfully!");
  } catch (error) {
    console.log(error);
    // toast.error(err.response.data.message);
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

    console.log(res);

    callBack();
    toast.success("Item deleted successfully!");
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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

    callBack();
    toast.success(res.data.message);
  } catch (error) {
    console.log(error);
  }
}

// admin requests
export async function getAllItemsForAdmin() {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/items`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllCollectionsForAdminn() {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/collections/all`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUsersForAdmin() {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/users/all`,
      method: "get",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    return res.data.usersList;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id, callBack) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/users/${id}`,
      method: "delete",
      headers: {
        authorization: `1234567${token}`,
      },
    });

    callBack();
    toast.success("User deleted successfully!");
  } catch (error) {
    console.log(error);
  }
}

export async function adminEditOrBlockUser(id, values, callBack, isBlocked) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/users/${id}`,
      method: "put",
      headers: {
        authorization: `1234567${token}`,
      },
      data: values,
    });
    if (isBlocked) {
      toast.success(
        `User ${res.data.savedUser ? "unblocked" : "locked"} successfully!`
      );
      callBack();
    } else {
      toast.success("User edited successfully!");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getOneUserById(id) {
  try {
    const res = await axios({
      url: `${BASE_URL}/admin/users/${id}`,
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
