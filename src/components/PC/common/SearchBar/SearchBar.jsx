import { SearchRounded } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export const SearchBar = ({ value, onChange, placeholder, onSubmit }) => (
    <TextField
        fullWidth
        variant={"outlined"}
        size={"small"}
        placeholder={placeholder}
        InputProps={{
            sx: {
                paddingRight: 0,
                bgcolor: "#3a444d",
            },
            endAdornment: (
                <InputAdornment position={"end"}>
                    <IconButton onClick={onSubmit}>
                        <SearchRounded />
                    </IconButton>
                </InputAdornment>
            ),
        }}
        value={value}
        onChange={onChange}
    />
);
