import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import PeopleIcon from '@mui/icons-material/People';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const projectData = [
  { icon: <FormatAlignJustifyIcon fontSize="large" />, label: 'Websites', count: 580 },
  { icon: <PeopleIcon fontSize="large" />, label: 'Satisfied Clients', count: 100 },
  { icon: <ContentCopyIcon fontSize="large" />, label: 'Projects', count: 320 },
  { icon: <FontDownloadIcon fontSize="large" />, label: 'Magazines and Brochures', count: 923 },
];

const ProjectStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box sx={{  py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} ref={ref} justifyContent="center">
          {projectData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                    backgroundColor: '#4caf50',
                    height:"160px",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                 color:"#fff",
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography variant="h4">
                  {inView ? (
                    <CountUp start={0} end={item.count} duration={2} />
                  ) : (
                    0
                  )}
                </Typography>
                <Typography variant="h6">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectStats;
