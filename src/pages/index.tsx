import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import Sidebar from '@/components/organisms/sidebar';

import { GridContainer, MainContainer, PageContainer } from '@/pages/styled';

const PageLayout = () => {
  // const location = useLocation();
  // const auth = cookies.get(AUTHENTICATION_COOKIE);
  // const userInfo = cookies.get(USER_INFO_COOKIE);

  // useEffect(() => {
  //   if (!auth || !auth.signed) {
  //     navigate('/login', { replace: true });
  //   } else {
  //     if (location.pathname === '/') {
  //       navigate(defaultPageAccessPath, { replace: true });
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!userInfo || !userInfo.id) {
  //     navigate('/login', { replace: true });
  //   }
  // }, [location.pathname]);
  useEffect(() => {
    // navigate(paths.login);
  }, []);
  return (
    <Box>
      <GridContainer container>
        <Sidebar />
        <PageContainer>
          <MainContainer>
            <Outlet />
          </MainContainer>
        </PageContainer>
      </GridContainer>
    </Box>
  );
};

export default PageLayout;
