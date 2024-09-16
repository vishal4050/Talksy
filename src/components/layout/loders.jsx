import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

export const LayoutLoaders = () => {
  return (
    <div>
      <Grid container height="calc(100vh - 4rem)" spacing={1}>
        <Grid 
          item 
          sm={4} 
          md={3} 
          xs={false}  
          height="100%"
        >
          <Skeleton variant="rectangular" height="100vh" />
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          lg={6} 
          height="calc(100vh - 1rem)" 
          bgcolor="primary.main"
        >
          <Stack spacing={1} bgcolor="transparent">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} variant="rectangular" height="10rem" />
            ))}
          </Stack>
        </Grid>

        <Grid 
          item 
          md={4} 
          lg={3} 
          height="100%" 
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Skeleton variant="rectangular" height="100vh" />
        </Grid>
      </Grid>
    </div>
  );
};
