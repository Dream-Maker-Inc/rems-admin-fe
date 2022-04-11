import { ListItem, Stack } from "@mui/material";
import { MenusModel } from "./Menus.model";

export const Menus = () => {
  const menuData = MenusModel;
  const handleMenuClick = (title) => alert(`title: ${title}`);

  return (
    <Stack>
      {menuData.map((it) => (
        <ListItemButton key={it.id} onClick={handleMenuClick}>
          {it.title}
        </ListItemButton>
      ))}
    </Stack>
  );
};

const ListItemButton = ({ children, onClick }) => (
  <ListItem
    button
    sx={{ borderBottom: "1px solid #eee", minHeight: "48px" }}
    onClick={() => onClick(children)}
  >
    {children}
  </ListItem>
);
