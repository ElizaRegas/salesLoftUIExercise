import React from 'react';
import ComposeButton from './ComposeButton';
import MailboxDiv from './MailboxDiv';
import "../../css/App.css";
import MeetDiv from './MeetDiv';

const SideNavbar = () => {

  return (
    <div id="sideNavbar">
      <ComposeButton />
      <MailboxDiv />
      <MeetDiv />
    </div>
  );
}

export default SideNavbar;
