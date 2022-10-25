import axios from "axios";
import { BASE_URL } from "../constants/base";

async function getLastItems() {
  const res = await axios({
    url: `${BASE_URL}/`,
  });
}

async function getOneItem() {}
