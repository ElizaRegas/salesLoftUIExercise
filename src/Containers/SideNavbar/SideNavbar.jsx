import React from 'react';
import ComposeButton from './ComposeButton';
import MailboxDiv from './MailboxDiv';
import "../../css:scss/App.css";
import MeetDiv from './MeetDiv';

const SideNavbar = () => {

  return (
    <div>
      <ComposeButton />
      <MailboxDiv />
      <MeetDiv />
    </div>
  );
}

export default SideNavbar;
