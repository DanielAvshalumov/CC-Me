"use client"
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";



const options : String[] = [
    'Contractors',
    'Contracts',
    'Profiles'
  ];
  
  const SearchField = () => {
    const [value, setValue] = useState<String>("");
    const [open, setOpen] = useState<boolean>(false);
    
    return (
      <Autocomplete
        open={open}
        options={options}
        getOptionLabel={(option) => `Search ${value} in ${option} `}
        onInputChange={(_, value) => {
          if(value.length === 0) {
            if(open) setOpen(false)
          } else {
            if(!open) setOpen(true)
          }
        }}
        onClose={() => setOpen(false)}
        renderInput={(params) => (
          <TextField {...params} label="Search..." variant="outlined" onChange={(e) => {setValue(e.target.value)}}/>
        )}
        style={{ width: 300 }} // Adjust the width as needed
      />
    );
  };

  export default SearchField;