import { Link } from "@mui/material";

export const A = (props) => (
  <Link
    {...props}
    target="_blank"
    sx={{
      color: props.c.grey[900],
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        color: props.c.red[500],
      },
      ...props.sx, // Allow overrides
    }}
  />
);