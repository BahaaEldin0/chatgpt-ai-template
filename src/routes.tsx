import { Icon } from './lib/chakra';
import {
  MdFileCopy,
  MdHome,
  MdLock,
  MdLayers,
  MdAutoAwesome,
  MdOutlineManageAccounts,
} from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { LuHistory } from 'react-icons/lu';
import { RoundedChart } from '@/components/icons/Icons';

// Auth Imports
import { IRoute } from './types/navigation';

const routes: IRoute[] = [
  
  {
    name: 'Home',
    disabled: true,
    path: '/home',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  {
    name: 'New Chat',
    path: '/',
    icon: (
      <Icon as={MdAutoAwesome} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },
  {
    name: 'My Chats',
    disabled: true,
    path: '/my-chats',
    icon: <Icon as={MdLayers} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  // --- Others ---
  {
    name: 'Loader Board',
    disabled: true,
    path: '/others',
    icon: <Icon as={MdFileCopy} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Submit Shipment',
        layout: '/others',
        path: '/prompt',
      },
      {
        name: 'Track Shipment',
        layout: '/others',
        path: '/register',
      },
      {
        name: 'Logistics Map',
        layout: '/others',
        path: '/sign-in',
      },
    ],
  },
  // --- Admin Pages ---
  // {
  //   name: 'Admin Pages',
  //   disabled: true,
  //   path: '/admin',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   collapse: true,
  //   items: [
  //     {
  //       name: 'All Templates',
  //       layout: '/admin',
  //       path: '/all-admin-templates',
  //     },
  //     {
  //       name: 'New Template',
  //       layout: '/admin',
  //       path: '/new-template',
  //     },
  //     {
  //       name: 'Edit Template',
  //       layout: '/admin',
  //       path: '/edit-template',
  //     },
  //     {
  //       name: 'Users Overview',
  //       layout: '/admin',
  //       path: '/overview',
  //     },
  //   ],
  // },
 {
    name: 'Profile Settings',
    disabled: true,
    path: '/settings',
    icon: (
      <Icon
        as={MdOutlineManageAccounts}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    invisible: true,
    collapse: false,
  },
  {
    name: 'History',
    disabled: true,
    path: '/history',
    icon: <Icon as={LuHistory} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Usage',
    disabled: true,
    path: '/usage',
    icon: <Icon as={RoundedChart} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'My plan',
    disabled: true,
    path: '/my-plan',
    icon: <Icon as={RoundedChart} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  // -------------- Prompt Pages --------------
  {
    name: 'Essay Generator',
    disabled: true,
    path: '/essay',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Content Simplifier',
    disabled: true,
    path: '/simplifier',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Product Description',
    disabled: true,
    path: '/product-description',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Email Enhancer',
    disabled: true,
    path: '/email-enhancer',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'LinkedIn Message',
    disabled: true,
    path: '/linkedin-message',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Instagram Caption',
    disabled: true,
    path: '/caption',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'FAQs Content',
    disabled: true,
    path: '/faq',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Product Name Generator',
    disabled: true,
    path: '/name-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'SEO Keywords',
    disabled: true,
    path: '/seo-keywords',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Review Responder',
    disabled: true,
    path: '/review-responder',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Business Idea Generator',
    disabled: true,
    path: '/business-generator',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
  {
    name: 'Article Generator',
    disabled: true,
    path: '/article',
    icon: <Icon as={IoMdPerson} width="20px" height="20px" color="inherit" />,
    invisible: true,
    collapse: false,
  },
];

export default routes;
