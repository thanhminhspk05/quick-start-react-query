import { Outlet } from 'react-router-dom';

import Article from '@mui/icons-material/Article';

import { RouteItem } from '@/types/route';

const adminRoutes: RouteItem[] = [
  {
    path: 'node',
    label: 'Node Management',
    element: <Outlet />,
    id: 'node',
    icon: <Article />,
    child: [
      {
        id: 'nodeManagement',
        path: 'management',
        label: 'Node Management',
        element: <Article />,
        menuName: 'Node/Node Management',
        fullPath: '/operation/node/management',
      },
    ],
  },
  {
    path: 'node',
    label: 'Node Management',
    element: <Outlet />,
    id: 'node',
    icon: <Article />,
    child: [
      {
        id: 'nodeManagement',
        path: 'management',
        label: 'Node Management',
        element: <Article />,
        menuName: 'Node/Node Management',
        fullPath: '/operation/node/management',
      },
    ],
  },
  {
    path: 'node',
    label: 'Node Management',
    element: <Outlet />,
    id: 'node',
    icon: <Article />,
    child: [
      {
        id: 'nodeManagement',
        path: 'management',
        label: 'Node Management',
        element: <Article />,
        menuName: 'Node/Node Management',
        fullPath: '/operation/node/management',
      },
    ],
  },
];

export { adminRoutes };
