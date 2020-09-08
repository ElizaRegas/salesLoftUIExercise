import React from 'react';
import ComposeButton from './ComposeButton';
import MailboxDiv from './MailboxDiv';
import MeetDiv from './MeetDiv';
import "../../css/App.css";

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
