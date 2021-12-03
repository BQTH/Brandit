import * as React from 'react';
import './../styles/styles.scss'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import BadgeIcon from '@mui/icons-material/Badge';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';

export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className="Bottom-Nav" sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Identity"
        value="identity"
        icon={<BadgeIcon />}
      />
      <BottomNavigationAction
        label="Vision"
        value="vision"
        icon={<VisibilityIcon />}
      />
      <BottomNavigationAction
        label="Research"
        value="research"
        icon={<SearchIcon/>}
      />
      <BottomNavigationAction
        label="Share"
        value="share"
        icon={<ShareIcon/>}
      />
    </BottomNavigation>
  );
}