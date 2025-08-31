import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Pagination
        count={5}
        variant="outlined"
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
}
