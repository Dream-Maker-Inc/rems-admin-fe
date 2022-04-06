import styled from "@emotion/styled";
import { ExpandLessRounded, ExpandMoreRounded } from "@mui/icons-material";
import { TreeItem, TreeView } from "@mui/lab";
import { Stack, Typography } from "@mui/material";
import { MenusModel } from "./Menus.model";

const menuData = MenusModel;

export const Menus = () => {
  return (
    <StyledTreeView
      defaultCollapseIcon={<ExpandMoreRounded />}
      defaultExpandIcon={<ExpandLessRounded />}
      onNodeSelect={(e, v) => console.log(v)}
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
  & .MuiTreeItem-content {
    flex-direction: row-reverse;
    padding: 12px 16px;
  }
`;

const StyledTreeItem = styled(TreeItem)`
  & .MuiTreeItem-content {
    padding-left: 48px;
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
