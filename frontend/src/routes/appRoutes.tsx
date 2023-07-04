import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";
import DownloadPage from "../pages/download/DownloadPage";
import UploadPage from "../pages/upload/UploadPage";
import { RouteType } from "./config";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DocumentationPage from "../pages/documentation/DocumentationPage";
import ProfilePage from "../pages/profile/ProfilePage";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Inicio",
      icon: <HomeIcon />
    }
  },
  {
    path: "/search",
    element: <SearchPage />,
    state: "search",
    sidebarProps: {
      displayText: "Search",
      icon: <SearchIcon />
    }
  },
  {
    path: "/download",
    element: <DownloadPage />,
    state: "download",
    sidebarProps: {
      displayText: "Descarga",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/upload",
    element: <UploadPage />,
    state: "upload",
    sidebarProps: {
      displayText: "Upload",
      icon: <CloudUploadIcon />
    }
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentación",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    state: "profile",
    sidebarProps: {
      displayText: "Perfil",
      icon: <AccountCircleIcon />
    }
  }
];

export default appRoutes;