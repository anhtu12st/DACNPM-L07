import React from 'react';
import SidePanel from "../SidePanel";
import style from './PostingRule.module.sass';

const PostingRule = () => {
  return (
      <SidePanel title={'Khi đăng bài'}>
        <ul className={style.ruleList}>
          <li>1. Ngôn ngữ thân thiện</li>
          <li>2. Thông tin bài đăng phải có nguồn</li>
          <li>3. Nội dung không bị trùng lặp</li>
          <li>4. Đọc kỹ nội quy của nhóm</li>
        </ul>
      </SidePanel>
  )
}

export default PostingRule;