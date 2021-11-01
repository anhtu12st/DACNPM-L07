import React from 'react';
import CreatePanel from "./CreatePanel";
import FooterPanel from "./FooterPanel";
import GroupPanel from "./GroupPanel"
import PostingRulePanel from "./PostingRulePanel";

const SidePanel = ({showGroup, showCreate, showFooter, showPostingRule}) => {
    return (
        <div className='panel-area'>
            {showPostingRule && <PostingRulePanel/>}
            {showGroup && <GroupPanel/>}
            {showCreate && <CreatePanel/>}
            {showFooter && <FooterPanel/>}
        </div>
    );
}

export default SidePanel;