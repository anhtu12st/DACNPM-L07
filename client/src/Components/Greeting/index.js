import React from 'react';
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel";
import LongButton from "../LongButton";

const Greeting = () => {
  const title = 'Hello';
  const buttonContent = 'Create Post'

  return (
      <SidePanel title={title} borderColor='red'>
        <p>Welcome to your frontpage. Come here to check in with your favourite communities</p>
        <Link to='/createpost'>
          <LongButton content={buttonContent}/>
        </Link>
      </SidePanel>
  );
}

export default Greeting;