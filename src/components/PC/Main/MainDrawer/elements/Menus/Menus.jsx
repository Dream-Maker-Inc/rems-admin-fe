import styled from "@emotion/styled";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { TreeItem, TreeView } from "@mui/lab";
import { Stack, Typography } from "@mui/material";
import { MenusModel } from "./Menus.model";

export const Menus = () => {
  const menuData = MenusModel;
  const handleMenuClick = (title) => alert(`title: ${title}`);

  return (
    <StyledTreeView
      defaultCollapseIcon={<ExpandMoreRounded />}
      defaultExpandIcon={<ExpandLessRounded />}
      onNodeSelect={(_, v) => handleMenuClick(v)}
    >
      {menuData.map((it) => (
        <StyledTreeHead
          key={it.id}
          nodeId={it.id}
          label={
            <TreeHeaderLabelWithIcon
              icon={it.icon}
              children={<Typography>{it.title}</Typography>}
            />
          }
        >
          {it.children &&
            it.children.map((it) => (
              <StyledTreeItem key={it.id} nodeId={it.id} label={it.title} />
            ))}
        </StyledTreeHead>
      ))}
    </StyledTreeView>
  );
};

const StyledTreeView = styled(TreeView)`
  color: #fff;

  & .MuiCollapse-root {
    margin: 0;
  }
`;

const StyledTreeHead = styled(TreeItem)`
  border-top: 1px solid #eeeeee33;
  background-color: #2d3034;

  & .MuiTreeItem-content {
    flex-direction: row-reverse;
    padding: 12px 16px;
  }
`;

const StyledTreeItem = styled(TreeItem)`
  background-color: #232629;

  & .MuiTreeItem-content {
    padding-left: 48px !important;
  }

  & .MuiTreeItem-label::before {
    content: "- ";
  }
`;

const TreeHeaderLabelWithIcon = ({ icon: iconPath, children }) => (
  <Stack direction={"row"} spacing={"8px"}>
    <img src={iconPath} alt="icon" />
    {children}
  </Stack>
);
