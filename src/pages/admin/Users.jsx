import { Box } from "@mui/material";
import React from "react";
import UserTable from "../../components/admin/UserTable";
import { getAllUsersForAdmin } from "../../requests/requests";

const Users = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const list = await getAllUsersForAdmin();
    console.log(list);
    setData(list);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Box sx={{ background: "#fff", my: 3 }}>
      <UserTable data={data} callBack={getData} />
    </Box>
  );
};

export default Users;
